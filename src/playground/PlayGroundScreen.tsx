import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { MyContext, MyProvider } from "./MyProvider";

export const PlayGroundScreen = () => {
    return (
        <MyProvider>
            <View style={{flex: 1}}>
                <Text>PlayGroundScreen</Text>
                <InnerView />
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