import { useContext, useReducer } from "react";
import { Button, Text, View } from "react-native";
import { MyContext, MyProvider } from "./MyProvider";
import { counterReducer, initState } from "./counterReducer";

export const PlayGroundScreen = () => {
    return (
        <MyProvider>
            <View style={{flex: 1}}>
                <Text>PlayGroundScreen</Text>
                <InnerView />
                
                <View>
                    <Text>CounterReducer</Text>
                    <CounterReducerUI/>
                </View>
            </View>
        </MyProvider>
    );
}

const InnerView = () => {
    const value = useContext(MyContext)
    console.log(value);
    return (
        <View>
            <Text>{value?.value1}</Text>
            <Button title="Set v1" onPress={() => value?.setValue1("OK")}/>
            <Text>{value?.value2}</Text>
            <Button title="Set v2" onPress={() => value?.setValue2(9)}/>
        </View>
    );
}

const CounterReducerUI = () => {
    const [state, dispatch] = useReducer(counterReducer, initState);

    return (
        <View>
            <Text>{state.count}</Text>
            <Button title="+" onPress={() => dispatch({type: "+"})} />
            <Button title="-" onPress={() => dispatch({type: "-"})} />
        </View>
    );
};