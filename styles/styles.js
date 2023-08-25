import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#aaaaaa',
      },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    numRow: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    delRow:{
        flex: 1,
        backgroundColor: '#aaaaaa',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    displayRow: {
        flex: 2,
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 25,
        marginBottom: 5,
        borderRadius: 5,
    },
    btnContainer: {
        backgroundColor: COLORS.gray2,
        padding: SIZES.xSmall,
        borderRadius: 3,
        height: 100,
        flex:1,
        flexDirection: "row",
        margin:5,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default styles;
