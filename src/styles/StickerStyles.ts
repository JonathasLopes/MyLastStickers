import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/GlobalStyles';

const StickerStyles = StyleSheet.create({
    logo: {
        width: 20,
        height: 20,
        borderRadius: 100,
        marginRight: 10,
    },

    containerTitle: {
        flexDirection: "row",
        alignItems: 'center',
    },

    containerNumbers: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: "wrap",
        marginBottom: 10,
        marginTop: 10,
    },

    title: {
        color: COLORS.white,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 17,
    },

    containerGold: {
        borderRadius: 100,
        borderWidth: 2,
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.gold,
    },

    backgroundGold: {
        borderRadius: 100,
        borderWidth: 2,
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: COLORS.gold,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.gold,
    },

    containerWhite: {
        borderRadius: 100,
        borderWidth: 2,
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.white,
    },

    backgroundWhite: {
        borderRadius: 100,
        borderWidth: 2,
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.white,
    },

    numberGold: {
        color: COLORS.gold,
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "400",
    },

    numberBlack: {
        color: COLORS.background,
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "400",
    },

    numberWhite: {
        color: COLORS.white,
        fontFamily: "Roboto",
        fontSize: 15,
        fontWeight: "400",
    }
});

export default StickerStyles