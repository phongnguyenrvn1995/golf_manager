import { Text, View } from "react-native";
import { styles } from "./Card.styles";

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{ title }</Text>
            <Text style={styles.cardDescription}>{ description }</Text>
        </View>
    );
};

export default Card;