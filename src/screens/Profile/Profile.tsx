import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./Profile.styles";

const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Profile Screen</Text>
            <Button title="Back to Home"
                onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Profile;