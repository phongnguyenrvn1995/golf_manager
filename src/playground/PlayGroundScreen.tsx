import { useContext, useReducer } from "react";
import { Button, Text, View } from "react-native";
import { MyContext, MyProvider } from "./MyProvider";
import { counterReducer, initState } from "./counterReducer";
import { MyContext2, MyProvider2 } from "./MyProvider2";

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
                
                <View>
                    <Text>CombineReducerAndContextUI</Text>
                    <MyProvider2>
                        <CombineReducerAndContextUI/>
                    </MyProvider2>
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

const CombineReducerAndContextUI = () => {
    const v = useContext(MyContext2);
    return (
        <View>
            <Text>{v?.state.count}</Text>
            <Button title="+" onPress={() => v?.dispatch({ type: "+"})} />
            <Button title="-" onPress={() => v?.dispatch({type: "-"})}/>
        </View>
    );
};