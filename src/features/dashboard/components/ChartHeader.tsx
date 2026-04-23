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

            <button
                onClick={toggleModal}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white hover:opacity-90 rounded-lg text-sm font-medium transition-all active:scale-95">
                {/* You can replace this + with an actual icon like <PlusIcon /> */}
                <span className="text-lg leading-none">+</span>
                <span className="hidden sm:inline">Add Task</span>
            </button>

        </div>
    )
}
