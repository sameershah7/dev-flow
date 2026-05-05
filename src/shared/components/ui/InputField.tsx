import { type ComponentPropsWithRef } from "react"

type InputFieldProps = ComponentPropsWithRef<"input"> & {
    label: string,
}

export function InputField({ label, ...props }: InputFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-text-main">
                {label}
            </label>
            <input
                {...props}
                className="mt-1 w-full rounded-lg border border-border p-2 border-md focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
