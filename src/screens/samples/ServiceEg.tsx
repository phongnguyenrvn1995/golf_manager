import { Text, View } from "react-native";
import React from "react";
import { useUser } from "../../hooks/samples/useUser";

export const ServiceEg = ({navigation} : {navigation: any}) => {
    const [user, error, loading] = useUser("user123");

    return (
        <View style={{flex: 1}}>
            {loading ? <Text>Loading</Text> :
            error ? <Text>Error... {error}</Text> : 
            user ? <Text>{user.name}</Text> : 
            <Text>No user</Text>}
        </View>
    );
};