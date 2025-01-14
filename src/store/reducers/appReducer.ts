import React, { Reducer } from "react";

export interface AppState {
    user: string | null;
    theme: "light" | "dark";
};

export type AppAction = 
    | { type: "SET_USER"; payload: string }
    | { type: "TOGGLE_THEME" };

export const initialState: AppState = {
    user:  null,
    theme: "light"
};

export const appReducer: Reducer<AppState, AppAction> = (state, action) => {
    switch(action.type) {
        case "SET_USER":
            return {...state, user: action.payload};
        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        default:
            return state;
    }
};