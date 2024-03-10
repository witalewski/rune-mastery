import styles from "./PointsCounter.module.css";

interface PointsCounterProps {
  pointsSpent: number;
}

export default function PointsCounter({
  pointsSpent: pointsSpent,
}: PointsCounterProps) {
  return (
    <div className={styles.pointsCounter}>
      <div>{pointsSpent}/6</div>
      <div>Points Spent</div>
    </div>
  );
}
