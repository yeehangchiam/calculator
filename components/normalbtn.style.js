import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#eeeeee',
        padding: SIZES.xSmall,
        borderRadius: 5,
        flex:1,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default styles;