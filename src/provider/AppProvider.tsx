import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/redux/index";
import UseContextSelectorProvider from "./UseContextSelectorProvider";

const store = configureStore();

const AppProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Provider store={store}>
      <UseContextSelectorProvider>{props.children}</UseContextSelectorProvider>
    </Provider>
  );
};

export default AppProvider;
