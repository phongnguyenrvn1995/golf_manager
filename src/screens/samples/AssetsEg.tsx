import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export const AssetsEg = ({ navigation }: { navigation: any}) => {
    return (
        <ImageBackground 
            source={require('../../assets/images/background.jpg')}
            style={styles.background}>
                <View style={styles.overlay}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                    <Text style={{...styles.text, fontFamily: 'Lato-Thin', fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: 'Roboto-Regular', fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: 'UKIJTuz', fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: 'PlaywriteVN-VariableFont_wght', fontSize: 20}}>Welcome to the App</Text>
                </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Đảm bảo hình ảnh phủ toàn bộ màn hình
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Hiệu ứng phủ mờ
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 24,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});