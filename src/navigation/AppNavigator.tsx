import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChangeLangScreen from "../screens/ChangeLangScreen";
import { UseStyleEg } from "../screens/samples/UseStyleEg";
import { EgScreen } from "../screens/samples/EgScreen";
import { HookEg } from "../screens/samples/HookEg";
import { ServiceEg } from "../screens/samples/ServiceEg";
import { StoreEg } from "../screens/samples/StoreEg";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EgScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangeLang" component={ChangeLangScreen} />
        <Stack.Screen name="UseStyleEg" component={UseStyleEg} />
        <Stack.Screen name="EgScreen" component={EgScreen} />
        <Stack.Screen name="HookEg" component={HookEg} />
        <Stack.Screen name="ServiceEg" component={ServiceEg} />
        <Stack.Screen name="StoreEg" component={StoreEg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
