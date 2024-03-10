import styles from "./PointsCounter.module.css";

interface PointsCounterProps {
  pointsSpent: number;
  totalPoints: number;
}

export default function PointsCounter({
  pointsSpent,
  totalPoints,
}: PointsCounterProps) {
  return (
    <div className={styles.pointsCounter}>
      <div>
        {pointsSpent}/{totalPoints}
      </div>
      <div>Points Spent</div>
    </div>
  );
}
