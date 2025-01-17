import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import { styles } from "./Home.styles";
import { useEffect } from "react";
import { initDatabase } from "../../database/db";
import { runMigrations } from "../../database/migrationsManager";
import { initializeDatabase } from "../../database";
import { addUser, deleteUser, getUsers, updateUser } from "../../database/models/User";
import { log } from "console";

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    useEffect(() => {
        const initialize = async () => {
            console.log("Open")
            await initializeDatabase();
        };
        initialize();
    }, undefined);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button 
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} />
            <Button 
                title="READ"
                onPress={async () => {
                    getUsers().then(value => {
                        for(const item of value) {
                            console.log('item = ' + item.name);
                        }
                    }).catch(error => {

                    });
                }} />
            <Button 
                title="INSERT"
                onPress={async () => {
                    addUser({name: 'PHONG', email: 'phong@gmail.com'}).then(value => {
                        console.log('inserted');
                    }).catch(error => {

                    });
                }} />
            <Button 
                title="UPDATE"
                onPress={async () => {
                    updateUser({id: 3, name: 'PHONG UPDATED', email: 'phong@gmail.com'}).then(value => {
                        console.log('updated');
                    }).catch(error => {

                    });
                }} />
            
            <Button 
                title="DELETE"
                onPress={async () => {
                    deleteUser(3).then(value => {
                        console.log('deleted');
                    }).catch(error => {

                    });
                }} />
        </View>
    );
};

export default Home;