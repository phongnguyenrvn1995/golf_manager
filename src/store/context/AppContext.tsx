import React, { createContext } from "react";
import { AppAction, AppState } from "../reducers/appReducer";

export interface AppContextProps {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
};

export const AppContext = createContext<AppContextProps | undefined> (undefined);