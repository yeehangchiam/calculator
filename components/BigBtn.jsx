import { Button, View, Text, TouchableOpacity } from "react-native";
import styles from "../components/bigbtn.style"

const BigBtn = ({ text, style}) => {
    return (
        <TouchableOpacity style={style}>
                <Text>{text}</Text>
            </TouchableOpacity>
        // <View style={[styles.btnContainer,{backgroundColor: 'blue'}]}>
            
        // </View>
            
    )

}

export default BigBtn