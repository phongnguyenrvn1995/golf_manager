import React from "react";
import { Text } from "react-native";
import { StyleSheet, TouchableHighlight, View } from "react-native";

export const EgScreen = ({navigation}: {navigation: any}) => {
    return (
        <View style={style.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('UseStyleEg') }}>
                <View style={{padding: 20, backgroundColor: 'red'}}>
                    <Text>Styles folder sample</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});