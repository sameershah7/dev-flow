import { Button } from "../../../shared/components/ui/Button";
import { SettingsSection } from "./SettingsSection";

export function DeleteAccount() {
    return (
        <SettingsSection title="Delete Account" description="This Account will be deleted permanently">
            <Button children="Delete Account" variant="danger" />
        </SettingsSection>
    )
}
