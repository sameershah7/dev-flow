export function RepoList() {
    const repos = [
        {
            id: 1,
            name: "DevConnect",
            desc: "Social platform for developers",
            stars: 23,
            forks: 8,
            lang: "TypeScript",
        },
        {
            id: 2,
            name: "TaskMate",
            desc: "Task manager with realtime updates",
            stars: 15,
            forks: 4,
            lang: "JavaScript",
        },
        {
            id: 3,
            name: "Portfolio",
            desc: "Personal portfolio site",
            stars: 11,
            forks: 2,
            lang: "React",
        },
    ];

    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm">

            <h3 className="text-lg font-semibold mb-4">
                Repositories
            </h3>

            <div className="space-y-3">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className="p-4 border border-border rounded-xl hover:shadow-md transition"
                    >
                        <h4 className="font-semibold">{repo.name}</h4>

                        <p className="text-sm text-text-main/70">
                            {repo.desc}
                        </p>

                        <div className="flex gap-4 mt-2 text-xs text-text-main/60">
                            <span>⭐ {repo.stars}</span>
                            <span>🍴 {repo.forks}</span>
                            <span>{repo.lang}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
