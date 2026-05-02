import { useGithubStore } from "../../../store/useGithubStore";

export function Contributions() {
    const { contributions, loading, error } = useGithubStore();

    if (loading.contributions) {
        return <div className="p-5">Loading contributions...</div>;
    }

    if (error) {
        return <div className="p-5 text-red-500">{error}</div>;
    }

    if (!contributions) return null;

    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setDate(today.getDate() - 365);

    const contribMap = new Map(
        contributions.contributions.map((d) => [d.date, d.count])
    );

    const days: { date: string; count: number }[] = [];

    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split("T")[0];

        days.push({
            date: dateStr,
            count: contribMap.get(dateStr) || 0,
        });
    }

    const getColor = (count: number) => {
        if (count === 0) return "bg-green-500/10";
        if (count < 3) return "bg-green-300";
        if (count < 6) return "bg-green-500";
        return "bg-green-700";
    };

    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm h-full">
            <h3 className="text-lg font-semibold mb-4">
                Last 365 Days Contributions
            </h3>

            <div className="overflow-x-auto">
                <div className="grid grid-rows-10 grid-flow-col gap-0.5">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-sm ${getColor(day.count)}`}
                            title={`${day.date}: ${day.count}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
