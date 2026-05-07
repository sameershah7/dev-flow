import { type ReactNode, type ComponentPropsWithoutRef } from "react";

interface SettingsSectionProps extends ComponentPropsWithoutRef<"div"> {
    title: string;
    description: string;
    children: ReactNode;
}

export function SettingsSection({
    title,
    description,
    children,
    className = "",
    ...props
}: SettingsSectionProps) {
    return (
        <section
            {...props}
            className={`bg-bg w-full p-4 rounded-2xl shadow-sm border border-border ${className}`}
        >
            <header className="mb-4">
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </header>
            <div className="content">
                {children}
            </div>
        </section>
    );
}

