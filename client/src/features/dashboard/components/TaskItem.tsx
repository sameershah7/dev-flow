import { Checkbox } from "../../../shared/components/ui/Checkbox";

interface TaskProps {
    id: number;
    title: string;
    priority: "High" | "Medium" | "Low";
    isCompleted: boolean;
    onToggle: (id: number) => void;
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

                <Checkbox checked={isCompleted} onChange={() => onToggle(id)} />

                <span className="text-text-main text-sm transition-all duration-300 ">
                    {title}
                </span>
            </div>

            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${priorityColors[priority]}`}>
                {priority}
            </span>
        </li>
    );
}
