import React from "react";

export const initState = {count: 0};

export const counterReducer = (state: {count: number}, action: {type: string}) => {
    switch(action.type) {
        case "+": return {count: state.count + 1};
        case "-": return {count: state.count - 1};
        default: return state;
    }
};