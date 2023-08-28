import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./normalbtn.style";

const Button ({onPress, text, size, theme}){
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double"){
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === "secondary"){
        <buttonStyles className="push"></buttonStyles>
    }
}