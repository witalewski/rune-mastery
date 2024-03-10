import { ReactNode, useCallback, useState } from "react";
import TalentButton from "../talent-button/TalentButton";
import styles from "./TalentPath.module.css";

interface TalentPathProps {
  name: string;
}

export default function TalentPath({ name }: TalentPathProps) {
  const [talents, setTalents] = useState([
    { id: "talent-1", name: "Talent 1", selected: true },
    { id: "talent-2", name: "Talent 2", selected: true },
    { id: "talent-3", name: "Talent 3", selected: false },
    { id: "talent-4", name: "Talent 4", selected: false },
    { id: "talent-5", name: "Talent 5", selected: false },
    { id: "talent-6", name: "Talent 6", selected: false },
    { id: "talent-7", name: "Talent 7", selected: false },
  ]);

  const onTalentChange = useCallback(
    (updatedTalent: Talent) =>
      setTalents((prevTalents) =>
        prevTalents.map((talent) =>
          talent.id === updatedTalent.id ? updatedTalent : talent
        )
      ),
    []
  );

  const isTalentDisabled = useCallback(
    (talentIndex: number) => {
      const isSelected = talents[talentIndex].selected;
      const isFirstTalent = talentIndex === 0;
      const isLastTalent = talentIndex === talents.length - 1;

      if (isSelected) {
        return !isLastTalent && talents[talentIndex + 1].selected;
      }

      return !isFirstTalent && !talents[talentIndex - 1].selected;
    },
    [talents]
  );

  return (
    <div className={styles.talentPath} role="group" aria-label={name}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.track}>
        {talents.map((talent, i) => (
          <PathGridCell key={talent.id}>
            <TalentButton
              talent={talent}
              disabled={isTalentDisabled(i)}
              onChange={onTalentChange}
            />
          </PathGridCell>
        ))}
      </div>
    </div>
  );
}

function PathGridCell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.cell}>
      <div className={styles.separator} />
      {children}
      <div className={styles.separator} />
    </div>
  );
}
