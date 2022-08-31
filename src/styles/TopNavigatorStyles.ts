import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/GlobalStyles';

const TopNavigatorStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    buttonLeft: {
        marginRight: 20,
    },

    textSelected: {
        color: COLORS.white,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '700',
    },

    textNoSelected: {
        color: COLORS.inactive,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '700',
    },

    ballMark: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        width: 10,
        height: 10,
        marginTop: 5,
    },

    containerButton: {
        alignItems: 'center',
        height: 50,
    }
});

export default TopNavigatorStyles;