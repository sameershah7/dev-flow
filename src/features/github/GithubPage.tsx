import { ProfileOverview } from "./components/ProfileOverview"
import { RepoList } from "./components/RepoList"
import { Contributions } from "./components/Contributions"

export default function GithubPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileOverview />
            <Contributions />

            <div className="md:col-span-2">
                <RepoList />
            </div>

        </div>
    );
}
