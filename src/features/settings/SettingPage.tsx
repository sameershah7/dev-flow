import { DeleteAccount } from "./components/DeleteAccount";
import { LoggedOut } from "./components/LoggedOut";
import { ProfileSettings } from "./components/ProfileSetting";

export default function SettingPage() {
    return (
        <div className="grid gap-y-4">
            <ProfileSettings />
            <LoggedOut />
            <h2 className="text-error text-lg">Danger Zone</h2>
            <DeleteAccount />
        </div>
    )
}
