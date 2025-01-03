import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ProfileScreen;
