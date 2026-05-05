import { useState } from "react"
import { SettingsSection } from "./SettingsSection";
import { InputField } from "../../../shared/components/ui/InputField";
import { Button } from "../../../shared/components/ui/Button";

export function ProfileSettings() {
    const [name, setName] = useState("John Doe");

    return (
        <SettingsSection
            title="Profile Info"
            description="Update your personal details."
        >
            <div className="space-y-4">
                <InputField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Button children="Save Changes" variant="primary" />
            </div>
        </SettingsSection>
    );
}
