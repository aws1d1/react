import logo from "./logo.svg";

import Header from "./Header.js";
import Item from "./Item";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ol>
        <Item done={false} text={"First Todo"} />
      </ol>
    </div>
  );
}

export default App;
