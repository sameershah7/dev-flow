interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
    className?: string;
}

export const Checkbox = ({ checked, onChange, className = "" }: CheckboxProps) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`appearance-none w-5 h-5 cursor-pointer rounded border border-border bg-background 
                checked:bg-primary checked:border-primary flex items-center justify-center transition-colors duration-200
                after:content-['✓'] after:text-white after:text-xs after:font-bold after:opacity-0 
                checked:after:opacity-100 ${className}`}
        />
    );
};
