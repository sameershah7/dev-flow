interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    // Added 'ghost' and 'type' support for better form handling
    variant?: "primary" | "secondary" | "danger" | "ghost";
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}

export function Button({
    children,
    onClick,
    variant = "primary",
    type = "button",
    className = "",
    disabled
}: ButtonProps) {
    const base = "px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary/50";

    const variants = {
        primary: "bg-primary text-white hover:brightness-110 shadow-sm",
        secondary: "bg-surface text-text-main border border-border hover:bg-hover",
        danger: "bg-error text-white hover:brightness-110 shadow-sm",
        ghost: "bg-transparent text-text-muted hover:bg-hover hover:text-text-main"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
