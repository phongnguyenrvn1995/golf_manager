import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./Home.styles";

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button 
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} />
        </View>
    );
};

export default Home;