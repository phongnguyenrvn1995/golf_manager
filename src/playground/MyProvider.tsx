import React, { createContext, ReactNode, useState } from "react";

export interface MyContextType {
    value1: string | null;
    setValue1: (s: string) => void;
    value2: number | null;
    setValue2: (n: number) => void;
}

export const MyContext = createContext<MyContextType | null>(null);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<number | null>(null);

    const value = {
        value1,
        setValue1,
        value2,
        setValue2
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};