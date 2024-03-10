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
      <h2 className={styles.title}>Points Spent</h2>
      <div>
        {pointsSpent} / {totalPoints}
      </div>
    </div>
  );
}
