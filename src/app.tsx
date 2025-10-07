import { musicPlayStore } from "./store/store";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <button onClick={() => musicPlayStore.play("Track 1")} type="button">
          {musicPlayStore.isPlaying ? "Playing" : "Play"}
          {" "}
          Track 1
        </button>
        <p>
          Edit
          {" "}
          <code>src/App.tsx</code>
          {" "}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
