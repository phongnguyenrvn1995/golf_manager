import { useState } from "react"

export const useToggle = (initVal: boolean = false) => {
    const [value, setValue] = useState(initVal);
    console.log(typeof value);
    const toggle = () => {
        setValue(!value);
    };
    return [value, toggle] as const;
};