import clsx from "clsx";
import { useCallback } from "react";
import TalentButton from "../talent-button/TalentButton";
import styles from "./TalentTrack.module.css";

interface TalentTrackProps {
  path: TalentPath;
  hasPointsRemaining: boolean;
  onChange: (value: TalentPath) => void;
}

export default function TalentTrack({
  path,
  hasPointsRemaining,
  onChange,
}: TalentTrackProps) {
  const { name, talents } = path;

  const onTalentChange = useCallback(
    (updatedTalent: Talent) =>
      onChange({
        ...path,
        talents: talents.map((talent) =>
          talent.id === updatedTalent.id ? updatedTalent : talent
        ),
      }),
    [path, talents, onChange]
  );

  const isTalentDisabled = useCallback(
    (talentIndex: number) => {
      const isSelected = talents[talentIndex].selected;
      const isFirstTalent = talentIndex === 0;
      const isLastTalent = talentIndex === talents.length - 1;

      if (isSelected) {
        return !isLastTalent && talents[talentIndex + 1].selected;
      }

      if (!hasPointsRemaining) {
        return true;
      }

      return !isFirstTalent && !talents[talentIndex - 1].selected;
    },
    [talents, hasPointsRemaining]
  );

  return (
    <div className={styles.talentPath} role="group" aria-label={name}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.track}>
        {talents.map((talent, i) => (
          <div className={styles.cell} key={talent.id}>
            <div
              className={clsx(
                styles.separator,
                talent.selected && styles.separatorSelected
              )}
            />
            <TalentButton
              talent={talent}
              disabled={isTalentDisabled(i)}
              onChange={onTalentChange}
            />
            <div
              className={clsx(
                styles.separator,
                talents[i + 1]?.selected && styles.separatorSelected
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
