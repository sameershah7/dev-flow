interface TaskProps {
    id: string;
    title: string;
    priority: "High" | "Medium" | "Low";
    isCompleted: boolean;
    onToggle: (id: string) => void;
}

export default function TaskItem({ id, title, priority, isCompleted, onToggle }: TaskProps) {
    const priorityColors = {
        High: "text-error bg-error/10",
        Medium: "text-warning bg-warning/10",
        Low: "text-success bg-success/10",
    };

    return (
        <li className="flex items-center justify-between p-3 hover:bg-hover transition-colors border-b border-border last:border-0 group">
            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onToggle(id)}
                    className="appearance-none w-5 h-5 cursor-pointer rounded border border-border bg-bg 
                            checked:bg-primary checked:border-primary flex items-center justify-center transition-colors duration-200
                            after:content-['✓'] after:text-white after:text-xs after:font-bold after:opacity-0 checked:after:opacity-100 "
                />
                <span className={`text-sm transition-all duration-300 ${isCompleted
                    ? "line-through text-text-muted opacity-60"
                    : "text-text-main"
                    }`}>
                    {title}
                </span>
            </div>

            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${priorityColors[priority]}`}>
                {priority}
            </span>
        </li>
    );
}
