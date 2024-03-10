import { useCallback, useState } from "react";
import styles from "./TalentButton.module.css";

interface TalentButtonProps {
  name: string;
  disabled?: boolean;
}

export default function TalentButton({
  name,
  disabled = false,
}: TalentButtonProps) {
  const [selected, setSelected] = useState(false);

  const onChange = useCallback(() => {
    setSelected((prev) => !prev);
  }, []);

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      const { pointerType, button } = event;

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

      onChange();
    },
    [selected, onChange, disabled]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) {
        return;
      }

      if (event.code !== "Space") {
        return;
      }

      onChange();
    },
    [onChange, disabled]
  );

  return (
    <div
      className={styles.talentButton}
      role="checkbox"
      tabIndex={0}
      aria-label={name}
      aria-checked={selected}
      aria-disabled={disabled}
      onContextMenu={(event) => event.preventDefault()}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
    >
      <div className={styles.icon} />
    </div>
  );
}
