const escapeRegExp = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

interface HighlightedTextProps {
    text: string;
    query: string;
}

export function HighlightedText({ text, query }: HighlightedTextProps) {
    if (!query.trim()) return <span>{text}</span>;

    const escapedQuery = escapeRegExp(query);

    const regex = new RegExp(`\\b(${escapedQuery}\\w*)`, "gi");
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark
                        key={index}
                        className="bg-yellow-300 text-black rounded-sm px-0.5"
                    >
                        {part}
                    </mark>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    );
}
