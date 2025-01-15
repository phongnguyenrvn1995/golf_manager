import { View } from "react-native";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useState } from "react";

export const ComponentEg = ({navigation}: {navigation: any}) => {
    const [btnMsg, setBtnMsg] = useState("Say my name");
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Card title="Card title" description="Card description" />
            <Button title={btnMsg} onPress={() => setBtnMsg("OMG")} />
        </View>
    );
};