interface StatsProps {
    label: string;
    value: number | string;
    delta: string;
    color?: string;
}

export default function StatsCard({ label, value, delta, color }: StatsProps) {
    return (
        <div className="p-4 border border-border rounded-lg w-full bg-surface ">
            <p className="text-sm text-text-muted">{label}</p>
            <h3 className="text-3xl font-semibold mt-1 text-text-main">{value}</h3>
            <p className="text-sm mt-1 font-medium"
                style={{ color: color || 'var(--color-primary)' }}>
                {delta}
            </p>
        </div>
    );
}

