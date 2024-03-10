import "./index.css";
import styles from "./App.module.css";
import MasteryCalculator from "./components/mastery-calculator/MasteryCalculator";
import { useState } from "react";
import { mockData } from "./mockData";

function App() {
  const [paths, setPaths] = useState(mockData);

  return (
    <main className={`${styles.container} opensans`}>
      <MasteryCalculator
        paths={paths}
        totalPoints={6}
        onChange={(paths) => setPaths(paths)}
      />
    </main>
  );
}

export default App;
