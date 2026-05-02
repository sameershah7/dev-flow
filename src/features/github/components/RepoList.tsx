import { useGithubStore } from "../../../store/useGithubStore";

export function RepoLsit() {
    const { repos, loading, error } = useGithubStore();

    if (loading.repos) return <div className="p-4">loading repos ....</div>
    if (error) return <div className="p-4 text-red-500">{error}</div>

    return (
        <div className="p-4 bg-bg border border-border rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
                Repositories
            </h3>

            <div className="space-y-3">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className="p-4 border border-border rounded-xl hover:shadow-sm transition">

                        <h4 className="font-semibold">{repo.name}</h4>
                        <p className="text-sm text-text-main/70">
                            {repo.description || "No description"}
                        </p>

                        <div className="flex gap-4 mt-2 text-xs text-text-main/60">
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                            <span>{repo.language || "N/A"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
