import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { counterReducer, initState } from "./counterReducer";

export interface MyContext2Type {
    state: {count: number};
    dispatch: Dispatch<{type: string}>;
}

export const MyContext2 = createContext<MyContext2Type | null> (null);

export const MyProvider2: React.FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(counterReducer, initState);
    return (
        <MyContext2.Provider value={{state, dispatch}}>
            {children}
        </MyContext2.Provider>
    );
}