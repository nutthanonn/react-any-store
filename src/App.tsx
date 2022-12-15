import React from "react";
import MobxCounter from "./components/MobxCounter";
import UseContextSelectorCounter from "./components/UseContextSelectorCounter";
import Provider from "./provider/Provider";
import { mobxStore } from "./store/mobxStore";

const App: React.FC = () => {
  return (
    <Provider>
      <UseContextSelectorCounter />
      <MobxCounter store={mobxStore} />
    </Provider>
  );
};

export default App;
