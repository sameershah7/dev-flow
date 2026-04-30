import { Button } from "../../../shared/components/ui/Button"
import { commonIcon } from "../../../shared/config/navigation"

type ViewMoreProps<T> = {
    data: T;
    handleBack: () => void;
    onUpdate?: (data: T) => void;
}

export function ViewMore<T extends { title: string; content?: string }>({ data, handleBack, onUpdate }: ViewMoreProps<T>) {
    if (!data) return handleBack();

    const hasContent = "content" in data && data.content;

    return (
        <div className="w-full mt-2 mx-auto p-4 bg-bg border border-border rounded-xl shadow-sm">
            <nav className="flex items-center border-b border-border mb-4 pb-2">
                <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="p-2"
                >
                    <commonIcon.backArrow size={24} />
                </Button>
                <h1 className="ps-4 text-xl font-bold text-text-main truncate">
                    {hasContent ? data.title : "Task"}
                </h1>
            </nav>

            <div className="text-text-main min-h-50 px-2 py-4">
                <p className="whitespace-pre-wrap leading-relaxed">
                    {hasContent ? data.content : "No additional content available."}
                </p>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex justify-between items-center text-sm text-text-secondary">
                <span>Last edited: Just now</span>
                <Button
                    onClick={() => onUpdate?.(data)}
                    variant="primary"
                    className="px-6"
                >
                    {hasContent ? "Update Note" : "Update Task"}
                </Button>
            </div>
        </div>
    )
}

