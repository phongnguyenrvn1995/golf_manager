import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { typography } from "../../styles/typography";

export const UseStyleEg = ({ navigation } : { navigation : any}) => {
    return (
        <View style={style.container}>
            <Text style={style.heading}>Welcome to React Native</Text>
            <Text style={style.body}>This is a simple example of using TypeScript and React Native styles.</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.medium
    },
    heading: {
        ...typography.heading1,
        color: colors.primary
    }, 
    body: {
        ...typography.body,
        color: colors.text,
        margin: spacing.small
    }
});