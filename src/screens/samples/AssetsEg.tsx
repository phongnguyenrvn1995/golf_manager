import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { fonts } from "../../utils/fonts";

export const AssetsEg = ({ navigation }: { navigation: any}) => {
    return (
        <ImageBackground 
            source={require('../../assets/images/background.jpg')}
            style={styles.background}>
                <View style={styles.overlay}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                    <Text style={{...styles.text, fontFamily: fonts.latoThin, fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: fonts.robotoRegular, fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: fonts.uKIJTuz, fontSize: 20}}>Welcome to the App</Text>
                    <Text style={{...styles.text, fontFamily: fonts.playwriteVN, fontSize: 20}}>Welcome to the App</Text>
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