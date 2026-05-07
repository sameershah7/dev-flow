import { Button } from "../../../shared/components/ui/Button";

interface ChartHeaderProps {
    toggleModal: () => void;
    taskCount?: number;
}
export default function ChartHeader({ toggleModal, taskCount }: ChartHeaderProps) {

    return (
        <div className="flex w-full items-center justify-between p-4 border-b border-border bg-bg/50">
            <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-text-main">Tasks</h2>
                <span className="px-2 py-0.5 text-xs bg-active text-primary rounded-full font-medium">
                    {taskCount} Active
                </span>
            </div>

            <Button onClick={toggleModal}>Add Task</Button>

        </div>
    )
}
