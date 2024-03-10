import { useCallback, useMemo } from "react";
import PointsCounter from "../points-counter/PointsCounter";
import TalentTrack from "../talent-track/TalentTrack";
import styles from "./MasteryCalculator.module.css";

interface MasteryCalculatorProps {
  paths: TalentPath[];
  totalPoints: number;
  onChange: (value: TalentPath[]) => void;
}

export default function MasteryCalculator({
  paths,
  totalPoints,
  onChange,
}: MasteryCalculatorProps) {
  const pointsSpent = useMemo(
    () =>
      paths.reduce(
        (acc, path) =>
          acc + path.talents.filter((talent) => talent.selected).length,
        0
      ),
    [paths]
  );

  const hasPointsRemaining = useMemo(
    () => pointsSpent < totalPoints,
    [pointsSpent, totalPoints]
  );

  const onPathChange = useCallback(
    (updatedPath: TalentPath) =>
      onChange(
        paths.map((path) => (path.id === updatedPath.id ? updatedPath : path))
      ),
    [onChange, paths]
  );

  return (
    <div className={styles.masteryCalculator}>
      <h1 className={styles.title}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
      <div className={styles.content}>
        <div className={styles.paths}>
          {paths.map((path) => (
            <TalentTrack
              key={path.id}
              path={path}
              onChange={onPathChange}
              hasPointsRemaining={hasPointsRemaining}
            />
          ))}
        </div>
        <PointsCounter pointsSpent={pointsSpent} totalPoints={totalPoints} />
      </div>
    </div>
  );
}
