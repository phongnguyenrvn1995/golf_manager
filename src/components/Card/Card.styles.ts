import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8
    },
    cardDescription: {
        fontSize: 14,
        color: '#555'
    }
});