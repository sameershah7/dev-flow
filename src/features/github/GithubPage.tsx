import { ProfileOverview } from "./components/ProfileOverview"

export default function GithubPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileOverview />
            <div> RepoList</div>
        </div>
    )
}
