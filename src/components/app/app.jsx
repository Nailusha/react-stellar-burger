import styles from "./app.module.css";
import { data } from "../../utils/data.js";

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
      	margin: "auto",
      	fontSize: "1.5rem"
      }}>
      	Hi
      </pre>
    </div>
  );
}

export default App;
