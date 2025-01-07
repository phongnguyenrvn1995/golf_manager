import { Text, TouchableHighlight, View } from "react-native";
import { useToggle } from "../../hooks/samples/useToggle";
import { typography } from "../../styles/typography";
import { useFetch } from "../../hooks/samples/useFetch";
import { useAuth } from "../../hooks/samples/useAuth";

export const HookEg = ({navigation}: {navigation: any}) => {
    const [isToggleVal, setToggle] = useToggle(false);
    return (
        <View style={{flex: 1}}>
            <Text style={{...typography.heading2}}>useToggle</Text>
            <Text>{isToggleVal ? "ON" : "OFF"}</Text>
            <TouchableHighlight
                style={{marginBottom: 30}}
                onPress={() => {setToggle();}}>
                <Text style={{backgroundColor: "yellow"}}>Toggle</Text>
            </TouchableHighlight>
            
            <Text style={{...typography.heading2}}>useFetch</Text>
            <View style={{paddingBottom: 30}}>
                <UseFetchUI />
            </View>

            <Text style={{...typography.heading2}}>useAuth</Text>
            <View style={{paddingBottom: 30}}>
                <UseAuthUI />
            </View>
        </View>
    );
};

const UseFetchUI = () => {
    const [data, error, loading] = useFetch("https://multiosstoring.mobie.in/json/eg.json");
    if(loading) {
        return (
            <Text>Loading...</Text>
        );
    }
    
    if(error) {
        return (
            <Text>Error... {error.stack}</Text>
        );
    }
    
    return (
        <Text>{JSON.stringify(data)}</Text>
    );
}

const UseAuthUI = () => {
    const [user, login, logout] = useAuth();
    return (
        <View>
            {user ? <Text>{user.toString()}</Text>
                  : <Text>Please login</Text>
            }
            <TouchableHighlight
                onPress={() => {
                    user ? logout() : login("My username!")
                }}>
                <Text>{user ? "Logout" : "Login"}</Text>
            </TouchableHighlight>
        </View>
    );
};