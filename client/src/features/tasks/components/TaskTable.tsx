import { TaskRow } from "./TaskRow";
import { type Task } from "../../../store/useTaskStore"

type TaskTableProps = {
    tasks: any[];
    onDelete: (id: number) => void;
    isComplete: (id: number) => void;
    editTask: (data: Task) => void;
};

export function TaskTable({ tasks, onDelete, isComplete, editTask }: TaskTableProps) {
    return (
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-bg/50 border-b border-border text-text-muted text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Task</th>
                            <th className="px-6 py-4 font-semibold">Priority</th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {tasks.map((task) => (
                            <TaskRow
                                key={task.id}
                                task={task}
                                onDelete={onDelete}
                                isComplete={isComplete}
                                editTask={editTask}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
