import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AppProvider } from "./store";

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  ) ;
};

export default App;
