import { useGithubStore } from "../../../store/useGithubStore";

export function ProfileOverview() {
    const { user, loading, error } = useGithubStore();

    if (loading.user) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!user) return null;

    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm hover:shadow-lg transition w-full">

            <h3 className="text-sm uppercase text-text-main/60 mb-4">
                Profile Overview
            </h3>

            <div className="flex items-center gap-4 mb-5">
                <img
                    src={user.avatar_url}
                    className="w-14 h-14 rounded-full border"
                />

                <div>
                    <h4 className="font-semibold text-lg">
                        {user.name || user.login}
                    </h4>
                    <p className="text-sm text-text-main/70">
                        {user.bio || "No bio available"}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <Stat title="Repos" value={user.public_repos} />
                <Stat title="Followers" value={user.followers} />
                <Stat title="Gists" value={user.public_gists} />
            </div>
        </div>
    );
}

interface stateType {
    title: string,
    value: number
}

function Stat({ title, value }: stateType) {
    return (
        <div className="p-3 rounded-xl bg-bg/50">
            <p className="text-xs text-text-main/60">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}
