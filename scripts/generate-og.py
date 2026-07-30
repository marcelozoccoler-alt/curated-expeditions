#!/usr/bin/env python3
"""Generate branded OpenGraph images for Create Travel.

Design: original logo (balloon + CREATE TRAVEL wordmark) centered on cream,
with the word "Blog" underneath for the blog variant.

- 1200x630px (OpenGraph standard)
- Everything fits inside the centered 520px square Facebook may crop to
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
FONT_PLAYFAIR = ROOT / "scripts/PlayfairDisplay.ttf"

NAVY = "#1E3A8A"
GOLD = "#D97706"
CREAM = "#F9F7F2"


def logo_bg() -> tuple:
    """Sample the logo's own background color so the paste blends seamlessly."""
    from PIL import Image as _I
    return _I.open(LOGO_PATH).convert("RGB").getpixel((2, 2))

CANVAS_W, CANVAS_H = 1200, 630
SAFE = 520
SAFE_Y0 = (CANVAS_H - SAFE) // 2
SAFE_Y1 = SAFE_Y0 + SAFE


def trimmed_logo() -> Image.Image:
    """Load the logo and trim the cream/white margin around the artwork."""
    logo = Image.open(LOGO_PATH).convert("RGB")
    arr = np.array(logo)
    # Non-background = anything noticeably darker than the cream background
    mask = arr.sum(axis=2) < (245 * 3)
    ys, xs = np.where(mask)
    if len(xs):
        logo = logo.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    return logo


def generate_image(is_blog: bool = False) -> Image.Image:
    img = Image.new("RGB", (CANVAS_W, CANVAS_H), logo_bg())
    draw = ImageDraw.Draw(img)

    # Thin brand borders
    draw.rectangle([0, 0, CANVAS_W, 10], fill=NAVY)
    draw.rectangle([0, CANVAS_H - 6, CANVAS_W, CANVAS_H], fill=GOLD)

    logo = trimmed_logo()

    blog_font = ImageFont.truetype(str(FONT_PLAYFAIR), 68) if is_blog else None
    blog_text = "Blog"
    blog_h = 0
    gap = 26
    if is_blog:
        bb = draw.textbbox((0, 0), blog_text, font=blog_font)
        blog_h = bb[3] - bb[1]

    # Fit the logo (plus optional "Blog" line) inside the safe square
    logo_h = SAFE - (blog_h + gap if is_blog else 0) - 20
    logo_w = int(logo.width * logo_h / logo.height)
    if logo_w > SAFE:
        logo_w = SAFE
        logo_h = int(logo.height * logo_w / logo.width)
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    block_h = logo_h + (blog_h + gap if is_blog else 0)
    top = SAFE_Y0 + (SAFE - block_h) // 2
    img.paste(logo, ((CANVAS_W - logo_w) // 2, top))

    if is_blog:
        bb = draw.textbbox((0, 0), blog_text, font=blog_font)
        x = (CANVAS_W - (bb[2] - bb[0])) // 2 - bb[0]
        y = top + logo_h + gap - bb[1]
        draw.text((x, y), blog_text, font=blog_font, fill=GOLD)

    return img


def main():
    if not FONT_PLAYFAIR.exists():
        print(f"Font not found: {FONT_PLAYFAIR}")
        return

    generate_image(False).save(OUT_CREATE, "JPEG", quality=95, optimize=True)
    print(f"Saved {OUT_CREATE}")
    generate_image(True).save(OUT_DIARIO, "JPEG", quality=95, optimize=True)
    print(f"Saved {OUT_DIARIO}")


if __name__ == "__main__":
    main()
