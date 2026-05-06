import { Button } from "../../../shared/components/ui/Button";
import { SettingsSection } from "./SettingsSection";

export function LoggedOut() {
    return (
        <SettingsSection title="LoggedOut" description="Loogedout form this device">
            <Button children="LoggedOut" variant="primary" />
        </SettingsSection>

    )
}
