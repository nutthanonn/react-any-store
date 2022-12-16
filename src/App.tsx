import React from "react";
import MobxCounter from "./components/MobxCounter";
import ReduxCounter from "./components/ReduxCounter";
import UseContextSelectorCounter from "./components/UseContextSelectorCounter";
import AppProvider from "./provider/AppProvider";
import { mobxStore } from "./store/mobxStore";

const App: React.FC = () => {
  return (
    <AppProvider>
      <UseContextSelectorCounter />
      <MobxCounter store={mobxStore} />
      <ReduxCounter />
    </AppProvider>
  );
};

export default App;
