import { Button, View,Text, TouchableOpacity } from "react-native";
import styles from "../components/normalbtn.style";
import { COLORS, FONT, SIZES } from "../constants/theme";

const NormalBtn = ({text}) => {
    return(
        <TouchableOpacity style={styles.btnContainer}>
            <Text>{text}</Text>
            
        </TouchableOpacity>
    )
    
}

export default NormalBtn