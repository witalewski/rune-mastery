import { useCallback } from "react";
import styles from "./TalentButton.module.css";

interface TalentButtonProps {
  talent: Talent;
  onChange: (value: Talent) => void;
  disabled?: boolean;
}

export default function TalentButton({
  talent,
  onChange,
  disabled = false,
}: TalentButtonProps) {
  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      const { pointerType, button } = event;
      const { selected } = talent;

      if (disabled) {
        return;
      }

      const isTryingToAddExistingTalent =
        pointerType === "mouse" && button === 0 && selected;
      const isTryingToRemoveMissingTalent =
        pointerType === "mouse" && button === 2 && !selected;

      if (isTryingToAddExistingTalent || isTryingToRemoveMissingTalent) {
        return;
      }

      onChange({ ...talent, selected: !selected });
    },
    [onChange, disabled, talent]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) {
        return;
      }

      if (event.code !== "Space") {
        return;
      }

      onChange({ ...talent, selected: !talent.selected });
    },
    [onChange, disabled, talent]
  );

  return (
    <div
      className={styles.talentButton}
      role="checkbox"
      tabIndex={0}
      aria-label={talent.name}
      aria-checked={talent.selected}
      aria-disabled={disabled}
      onContextMenu={(event) => event.preventDefault()}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
    >
      <div className={styles.icon} />
    </div>
  );
}
