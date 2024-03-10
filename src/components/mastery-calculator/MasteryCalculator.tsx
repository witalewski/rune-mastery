import { useCallback, useMemo, useState } from "react";
import PointsCounter from "../points-counter/PointsCounter";
import TalentTrack from "../talent-track/TalentTrack";
import styles from "./MasteryCalculator.module.css";

const TOTAL_POINTS = 6;

export default function MasteryCalculator() {
  const [paths, setPaths] = useState([
    {
      id: "path-1",
      name: "Talent Path 1",
      talents: [
        { id: "talent-1", name: "Talent 1", selected: true },
        { id: "talent-2", name: "Talent 2", selected: true },
        { id: "talent-3", name: "Talent 3", selected: false },
        { id: "talent-4", name: "Talent 4", selected: false },
        { id: "talent-5", name: "Talent 5", selected: false },
        { id: "talent-6", name: "Talent 6", selected: false },
        { id: "talent-7", name: "Talent 7", selected: false },
      ],
    },
    {
      id: "path-2",
      name: "Talent Path 2",
      talents: [
        { id: "talent-1", name: "Talent 1", selected: true },
        { id: "talent-2", name: "Talent 2", selected: true },
        { id: "talent-3", name: "Talent 3", selected: false },
        { id: "talent-4", name: "Talent 4", selected: false },
        { id: "talent-5", name: "Talent 5", selected: false },
        { id: "talent-6", name: "Talent 6", selected: false },
        { id: "talent-7", name: "Talent 7", selected: false },
      ],
    },
  ]);

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
    () => pointsSpent < TOTAL_POINTS,
    [pointsSpent]
  );

  const onPathChange = useCallback(
    (updatedPath: TalentPath) =>
      setPaths((prevPaths) =>
        prevPaths.map((path) =>
          path.id === updatedPath.id ? updatedPath : path
        )
      ),
    []
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
        <PointsCounter pointsSpent={pointsSpent} />
      </div>
    </div>
  );
}
