import "./index.css";
import styles from "./App.module.css";
import MasteryCalculator from "./components/mastery-calculator/MasteryCalculator";
import { useState } from "react";

function App() {
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
        // { id: "talent-6", name: "Talent 6", selected: false },
        // { id: "talent-7", name: "Talent 7", selected: false },
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
        // { id: "talent-6", name: "Talent 6", selected: false },
        // { id: "talent-7", name: "Talent 7", selected: false },
      ],
    },
  ]);

  return (
    <main className={styles.container}>
      <MasteryCalculator
        paths={paths}
        totalPoints={7}
        onChange={(paths) => setPaths(paths)}
      />
    </main>
  );
}

export default App;
