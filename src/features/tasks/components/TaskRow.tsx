import { Button } from "../../../shared/components/ui/Button.tsx";

type TaskRowProps = {
    task: {
        id: number;
        title: string;
        priority: "high" | "med" | "low";
        done: boolean;
    };
    onDelete: (id: number) => void;
};

export function TaskRow({ task, onDelete }: TaskRowProps) {
    return (
        <tr className="hover:bg-hover/50 transition-colors group">
            <td className="px-6 py-4">
                <input
                    type="checkbox"
                    checked={task.done}
                    readOnly
                    className="w-5 h-5 rounded border-border accent-primary"
                />
            </td>

            <td
                className={`px-6 py-4 text-sm ${task.done
                    ? "line-through text-text-muted"
                    : "text-text-main"
                    }`}
            >
                {task.title}
            </td>

            <td className="px-6 py-4">
                <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${task.priority === "high"
                        ? "bg-error/10 text-error"
                        : "bg-success/10 text-success"
                        }`}
                >
                    {task.priority}
                </span>
            </td>

            <td className="px-6 py-4 text-right space-x-2">
                <Button variant="ghost">Edit</Button>
                <Button variant="danger" onClick={() => onDelete(task.id)}>
                    Delete
                </Button>
            </td>
        </tr>
    );
}
