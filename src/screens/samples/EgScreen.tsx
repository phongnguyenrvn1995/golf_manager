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
            <View style={{padding: 20, backgroundColor: 'blue'}}>
                <Text>Styles folder sample</Text>
            </View>
        </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('HookEg') }}>
                <View style={{padding: 20, backgroundColor: 'yellow'}}>
                    <Text>Hook folder sample</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('ServiceEg') }}>
                <View style={{padding: 20, backgroundColor: 'green'}}>
                    <Text>Service folder sample</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('StoreEg') }}>
                <View style={{padding: 20, backgroundColor: 'cyan'}}>
                    <Text>Store folder sample</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('AssetsEg') }}>
                <View style={{padding: 20, backgroundColor: 'yellow'}}>
                    <Text>Assets folder sample</Text>
                </View>
            </TouchableHighlight>
            
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { navigation.navigate('ComponentEg') }}>
                <View style={{padding: 20, backgroundColor: 'cyan'}}>
                    <Text>Components folder sample</Text>
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