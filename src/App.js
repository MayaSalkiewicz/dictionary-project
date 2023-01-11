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
    </div>
  );
}

export default App;
