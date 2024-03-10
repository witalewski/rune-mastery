import "./index.css";
import styles from "./App.module.css";
import TalentPath from "./components/talent-path/TalentPath";

function App() {
  return (
    <main>
      <h1 aria-disabled={true}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
      <div className={styles.container}>
        <TalentPath name="Talent Path 1" />
        <TalentPath name="Talent Path 2" />
      </div>
    </main>
  );
}

export default App;
