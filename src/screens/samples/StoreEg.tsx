import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AppContext } from "../../store";
import { SET_USER, TOGGLE_THEME } from "../../store/reducers/actionTypes";

export const StoreEg = ({navigation}: {navigation: any}) => {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error("AppContext must be used within an AppProvider");
    }

    const {state, dispatch} = context;

    return (
        <View style={{flex: 1}}>
            <Text>User: { state.user || "No user" }</Text>
            <Text>Theme: { state.theme }</Text>
            <Button title="Set user"
                onPress={() => dispatch({type: SET_USER, payload: "PHONG"})} />
            <Button title="Toggle Theme"
                onPress={() => dispatch({type: TOGGLE_THEME})} />
        </View>
    );
};