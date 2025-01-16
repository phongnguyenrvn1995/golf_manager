import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./Home.styles";
import { useEffect } from "react";
import { initDatabase } from "../../database/db";
import { runMigrations } from "../../database/migrationsManager";

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    useEffect(() => {
        const initialize = async () => {
            console.log("Open")
            await initDatabase();
            await runMigrations();

        };
        initialize();
    }, undefined);
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