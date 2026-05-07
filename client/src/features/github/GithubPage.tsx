import { useEffect } from "react";
import { useGithubStore } from "../../store/useGithubStore";

import { ProfileOverview } from "./components/ProfileOverview"
import { Contributions } from "./components/Contributions"
import { RepoLsit } from "./components/RepoList";

export default function GithubPage() {
    const { loadGithubData } = useGithubStore()

    useEffect(() => {
        loadGithubData("sameershah7")
    }, [loadGithubData])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileOverview />
            <Contributions />

            <div className="md:col-span-2">
                <RepoLsit />
            </div>

        </div>
    );
}
