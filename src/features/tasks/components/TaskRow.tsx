import { Button } from "../../../shared/components/ui/Button.tsx";
import { Checkbox } from "../../../shared/components/ui/Checkbox.tsx";
import { HighlightedText } from "../../../shared/components/ui/HighlightedText.tsx";
import { useTaskStore } from "../../../store/useTaskStore.ts";

type TaskRowProps = {
    task: {
        id: number;
        title: string;
        priority: "high" | "med" | "low";
        done: boolean;
    };
    onDelete: (id: number) => void;
};

export function TaskRow({ task, onDelete, isComplete }: TaskRowProps) {
    const { searchQuery } = useTaskStore();

    return (
        <tr className="hover:bg-hover/50 transition-colors group">
            <td className="px-6 py-4">
                <Checkbox checked={task.done} onChange={() => isComplete(task.id)} />
            </td>

            <td className="px-6 py-4">
                <HighlightedText text={task.title} query={searchQuery} />
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
