import { type ComponentPropsWithRef } from "react"

type InputFieldProps = ComponentPropsWithRef<"input"> & {
    label: string;
    error?: string;
};

export function InputField({ label, error, ...props }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {/* Label: Slightly bolder and spaced for readability */}
            <label
                className="text-[13px] font-semibold text-slate-600 ml-0.5 uppercase tracking-wide"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    {...props}
                    className={`
                        w-full px-4 py-3 rounded-xl border bg-white
                        text-slate-900 placeholder:text-slate-400
                        transition-all duration-200 ease-in-out
                        /* Default state */
                        border-slate-200 shadow-sm
                        /* Hover state */
                        hover:border-slate-300
                        /* Focus state: Border color + soft glow ring */
                        focus:outline-none focus:border-primary focus:ring-4 focus:ring-blue-50
                        /* Error state logic */
                        ${error ? "border-error focus:border-red-error focus:ring-red-50" : ""}
                    `}
                />
            </div>

            {error && (
                <p className="text-xs font-medium text-error mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
}
