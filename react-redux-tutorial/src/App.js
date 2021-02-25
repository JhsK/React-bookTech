import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainers from "./containers/TodosContainers";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainers />
    </div>
  );
};

export default App;
