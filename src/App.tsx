import "./index.css";
import styles from "./App.module.css";
import MasteryCalculator from "./components/mastery-calculator/MasteryCalculator";

function App() {
  return (
    <main className={styles.container}>
      <MasteryCalculator />
    </main>
  );
}

export default App;
