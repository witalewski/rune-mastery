import "./index.css";
import styles from "./App.module.css";
import TalentButton from "./components/talent-button/TalentButton";

function App() {
  return (
    <main>
      <h1 aria-disabled={true}>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </h1>
      <div className={styles.container}>
        <TalentButton name="Talent 1" />
        <TalentButton name="Talent 2" />
        <TalentButton name="Talent 3" />
        <TalentButton name="Unavailable Talent" disabled />
      </div>
    </main>
  );
}

export default App;
