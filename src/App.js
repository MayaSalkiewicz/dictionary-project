import "./App.css";
import Dictionary from "./Dictionary";

import brainflower from "./brainflower.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <img src={brainflower} className="Brainflower" alt="brainflower" />
          <Dictionary defaultKeyword={"happiness"} />
        </div>
      </div>
      <div className="signature">
        Coded by{" "}
        <a
          href="https://github.com/MayaSalkiewicz"
          target="_blank"
          rel="noreferrer"
        >
          Maya Salkiewicz
        </a>
      </div>
    </div>
  );
}

export default App;
