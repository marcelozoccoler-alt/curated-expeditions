import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  children: string;
  className?: string;
}

/**
 * Renderiza o texto do roteiro com a tipografia editorial da Create Travel.
 * Sem cores hardcoded — tudo em tokens do design system.
 */
export const RoteiroMarkdown = ({ children, className = "" }: Props) => (
  <div className={`space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground/85 ${className}`}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <p className="leading-relaxed">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic text-foreground/90">{children}</em>,
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="space-y-2 pl-1">{children}</ul>,
        ol: ({ children }) => <ol className="space-y-2 pl-5 list-decimal">{children}</ol>,
        li: ({ children }) => (
          <li className="flex gap-2 [&>ol]:hidden">
            <span className="text-gold mt-[0.45rem] text-[8px] leading-none shrink-0">●</span>
            <span className="flex-1">{children}</span>
          </li>
        ),
        h4: ({ children }) => (
          <h4 className="font-serif text-lg font-semibold text-foreground pt-2">{children}</h4>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-gold/60 pl-4 italic text-foreground/80">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="border-border/60" />,
        table: ({ children }) => (
          <div className="overflow-x-auto rounded-xl border border-border/70 bg-card">
            <table className="w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-muted/60">{children}</thead>,
        th: ({ children }) => (
          <th className="text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground font-medium">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2.5 border-t border-border/50 align-top">{children}</td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);

export default RoteiroMarkdown;
