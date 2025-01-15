import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{ title }</Text>
        </TouchableOpacity>
    );
};

export default Button;