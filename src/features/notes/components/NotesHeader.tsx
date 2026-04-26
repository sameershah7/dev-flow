interface NotesHeaderProps {
    currentFilter: "card" | "table";
    onFilter: (filter: "card" | "table") => void;
}

export function NotesHeader({ currentFilter, onFilter }: NotesHeaderProps) {

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-text-main">All Notes</h1>
                <p className="text-sm text-text-muted">Manage and organize your notes.</p>
            </div>

            <div className="flex bg-surface p-1 rounded-lg border border-border self-start">
                {(["card", "table"] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => onFilter(t)}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-all ${currentFilter === t
                            ? "bg-bg text-primary shadow-sm"
                            : "text-text-muted hover:text-text-main"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}
