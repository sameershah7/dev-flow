import { useState, useEffect } from "react"
import { useGithubStore } from "../../../store/useGithubStore";

interface UserResponse {
    name: string,
    bio: string,
    avatar_url: string;
    public_repos: number,
    public_gists: number,
    followers: number,

}

export function ProfileOverview() {
    const [userData, setUserData] = useState<UserResponse | null>(null);
    const { user, loading, error } = useGithubStore();

    useEffect(() => {
        if (!user) return;
        const data: UserResponse = {
            name: user.name ?? "",
            bio: user.bio ?? "",
            avatar_url: user.avatar_url ?? "",
            public_repos: user.public_repos ?? 0,
            public_gists: user.public_gists ?? 0,
            followers: user.followers ?? 0,
        };
        setUserData(data);
    }, [user]);

    if (loading.user) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!userData) return null;

    return (
        <div className="p-5 bg-bg border border-border rounded-2xl shadow-sm hover:shadow-lg transition w-full">

            <h3 className="text-sm uppercase text-text-main/60 mb-4">
                Profile Overview
            </h3>

            <div className="flex items-center gap-4 mb-5">
                <img
                    src={userData.avatar_url}
                    className="w-14 h-14 rounded-full border"
                />

                <div>
                    <h4 className="font-semibold text-lg">{userData.name}</h4>
                    <p className="text-sm text-text-main/70">
                        {userData.bio}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <Stat title="Repos" value={userData.public_repos} />
                <Stat title="Followers" value={userData.followers} />
                <Stat title="Gists" value={userData.public_gists} />
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
