import { useState } from "react"
import { SettingsSection } from "./SettingsSection";
import { InputField } from "../../../shared/components/ui/InputField";
import { Button } from "../../../shared/components/ui/Button";

export function ProfileSettings() {
    const [name, setName] = useState("Shah");
    const [isEdit, setIsEdit] = useState(false)

    return (
        <SettingsSection
            title="Profile Info"
            description=""
        >
            <div className="flex justify-between items-end">
                {isEdit
                    ? (
                        <>
                            <InputField
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Button
                                children="Save Changes"
                                variant="primary"
                                onClick={() => setIsEdit(!isEdit)}
                                className="py-3"
                            />
                        </>
                    )
                    : (
                        <>
                            <h4 className="text-2xl font-semibold">{name}</h4>
                            <Button
                                children="Edit"
                                variant="ghost"
                                onClick={() => setIsEdit(!isEdit)}
                            />
                        </>
                    )
                }
            </div>

        </SettingsSection>
    );
}
