import React, { ReactNode, useReducer } from "react";
import { appReducer, initialState } from "../reducers/appReducer";
import { AppContext } from "./AppContext";

interface AppProviderProps {
    children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}