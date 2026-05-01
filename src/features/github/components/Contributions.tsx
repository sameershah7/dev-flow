export function Contributions() {
    const days = new Array(70).fill(0);

    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
                Contributions
            </h3>

            <div className="grid grid-cols-10 gap-1">
                {days.map((_, i) => (
                    <div
                        key={i}
                        className="w-3 h-3 bg-green-500/30 rounded-sm"
                    />
                ))}
            </div>
        </div>
    );
}
