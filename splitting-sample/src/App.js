import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";

const SpliteMe = loadable(() => import("./SpliteMe"), {
  fallbackL: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SpliteMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React !
        </p>
        {visible && <SpliteMe />}
      </header>
    </div>
  );
}

export default App;
