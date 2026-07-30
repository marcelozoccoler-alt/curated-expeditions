#!/usr/bin/env python3
"""Generate branded OpenGraph images for Create Travel.

Design constraints:
- 1200x630px (OpenGraph standard)
- 520px square safe zone centered for Facebook mobile crops
- "Viagens Autorais" must fit in or slightly exceed the width of "CREATE TRAVEL"
- Brand colors: navy #1E3A8A, emerald #059669, gold #D97706, cream #F9F7F2

Usage:
    python3 scripts/generate-og.py
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import numpy as np

ROOT = Path(__file__).parent.parent
LOGO_PATH = ROOT / "src/assets/logo.jpg"
OUT_CREATE = ROOT / "public/og-create-travel.jpg"
OUT_DIARIO = ROOT / "public/og-diario.jpg"

COLORS = {
    "navy": "#1E3A8A",
    "emerald": "#059669",
    "gold": "#D97706",
    "cream": "#F9F7F2",
    "white": "#FFFFFF",
    "dark": "#111827",
}

CANVAS_W, CANVAS_H = 1200, 630
SAFE_ZONE = 520  # centered square Facebook may crop to
SAFE_X0 = (CANVAS_W - SAFE_ZONE) // 2
SAFE_Y0 = (CANVAS_H - SAFE_ZONE) // 2
SAFE_X1, SAFE_Y1 = SAFE_X0 + SAFE_ZONE, SAFE_Y0 + SAFE_ZONE

# Font source — Playfair Display is the brand heading font.
# Download once and place at this path, or adjust the path below.
FONT_PLAYFAIR = ROOT / "scripts/PlayfairDisplay.ttf"


def load_font(path: Path, size: int):
    return ImageFont.truetype(str(path), size)


def fit_text_width(draw: ImageDraw.ImageDraw, text: str, font_path: Path, max_width: int, max_size: int, min_size: int = 24):
    """Find the largest font size so text fits within max_width."""
    for size in range(max_size, min_size - 1, -1):
        font = load_font(font_path, size)
        bbox = draw.textbbox((0, 0), text, font=font)
        width = bbox[2] - bbox[0]
        if width <= max_width:
            return font, width, size
    font = load_font(font_path, min_size)
    bbox = draw.textbbox((0, 0), text, font=font)
    return font, bbox[2] - bbox[0], min_size


def crop_balloon(logo: Image.Image) -> Image.Image:
    """Crop the balloon portion and remove the white background."""
    w, h = logo.size
    # The balloon is roughly the top half of the logo; cut before the wordmark.
    crop_bottom = int(h * 0.50)
    balloon = logo.crop((0, 0, w, crop_bottom)).convert("RGBA")

    # Make white-ish background transparent
    arr = np.array(balloon)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    white_mask = (r > 240) & (g > 240) & (b > 240)
    arr[white_mask] = [255, 255, 255, 0]
    balloon = Image.fromarray(arr, "RGBA")

    # Tight crop to non-transparent pixels
    bbox = balloon.getbbox()
    if bbox:
        balloon = balloon.crop(bbox)
    return balloon


def draw_centered_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, y: int, color: str, canvas_w: int = CANVAS_W):
    bbox = draw.textbbox((0, 0), text, font=font)
    width = bbox[2] - bbox[0]
    x = (canvas_w - width) // 2
    draw.text((x, y), text, font=font, fill=color)
    return x, y, width, bbox[3] - bbox[1]


def generate_image(is_blog: bool = False) -> Image.Image:
    img = Image.new("RGB", (CANVAS_W, CANVAS_H), COLORS["cream"])
    draw = ImageDraw.Draw(img)

    # Borders
    top_border = 12
    bottom_border = 6
    draw.rectangle([0, 0, CANVAS_W, top_border], fill=COLORS["navy"])
    draw.rectangle([0, CANVAS_H - bottom_border, CANVAS_W, CANVAS_H], fill=COLORS["gold"])

    # Load logo balloon
    logo = Image.open(LOGO_PATH).convert("RGBA")
    balloon = crop_balloon(logo)
    balloon_size = 180
    balloon = balloon.resize((balloon_size, int(balloon.height * balloon_size / balloon.width)), Image.LANCZOS)
    balloon_w, balloon_h = balloon.size
    balloon_x = (CANVAS_W - balloon_w) // 2
    # Paste with transparency
    img.paste(balloon, (balloon_x, SAFE_Y0 + 30), balloon)

    # Layout: place text below balloon, centered vertically in safe zone
    # Brand name
    brand_text = "CREATE TRAVEL"
    # Max width for brand name: slightly less than safe zone
    brand_font, brand_width, brand_size = fit_text_width(
        draw, brand_text, FONT_PLAYFAIR, SAFE_ZONE - 40, 72, 42
    )
    brand_y = SAFE_Y0 + 30 + balloon_h + 30
    draw_centered_text(draw, brand_text, brand_font, brand_y, COLORS["navy"])

    # Tagline "Viagens Autorais"
    # The user wants it within the size of the company name, can exceed a little more.
    tagline_text = "Viagens Autorais"
    # Max width slightly larger than brand width, but still within safe zone + small margin
    max_tagline_width = min(brand_width + 60, SAFE_ZONE - 20)
    tagline_font, tagline_width, tagline_size = fit_text_width(
        draw, tagline_text, FONT_PLAYFAIR, max_tagline_width, brand_size + 4, brand_size - 6
    )
    tagline_y = brand_y + (brand_size + 10)
    draw_centered_text(draw, tagline_text, tagline_font, tagline_y, COLORS["gold"])

    # Decorative line
    line_y = tagline_y + tagline_size + 20
    line_width = 180
    line_x0 = (CANVAS_W - line_width) // 2
    line_x1 = line_x0 + line_width
    draw.line([(line_x0, line_y), (line_x1, line_y)], fill=COLORS["gold"], width=2)
    # Dot in the middle
    dot_radius = 5
    draw.ellipse([CANVAS_W//2 - dot_radius, line_y - dot_radius, CANVAS_W//2 + dot_radius, line_y + dot_radius], fill=COLORS["gold"])

    # Blog subtitle if blog variant
    if is_blog:
        sub_font = load_font(FONT_PLAYFAIR, 28)
        sub_text = "Blog de viagem"
        sub_y = line_y + 20
        draw_centered_text(draw, sub_text, sub_font, sub_y, COLORS["emerald"])
    else:
        sub_font = load_font(FONT_PLAYFAIR, 26)
        sub_text = "roteiros sob medida e curadoria"
        sub_y = line_y + 18
        draw_centered_text(draw, sub_text, sub_font, sub_y, COLORS["emerald"])

    return img


def main():
    if not FONT_PLAYFAIR.exists():
        print(f"Font not found: {FONT_PLAYFAIR}")
        print("Download Playfair Display from Google Fonts and save it to scripts/PlayfairDisplay.ttf")
        return

    img_create = generate_image(is_blog=False)
    img_create.save(OUT_CREATE, "JPEG", quality=95, optimize=True)
    print(f"Saved {OUT_CREATE} ({img_create.size[0]}x{img_create.size[1]})")

    img_diario = generate_image(is_blog=True)
    img_diario.save(OUT_DIARIO, "JPEG", quality=95, optimize=True)
    print(f"Saved {OUT_DIARIO} ({img_diario.size[0]}x{img_diario.size[1]})")


if __name__ == "__main__":
    main()
