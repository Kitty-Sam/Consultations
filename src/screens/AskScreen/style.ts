import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';

export const styles = StyleSheet.create({
    rootWrapper: { marginHorizontal: 16, flex: 1, position: 'relative' },
    textWrapper: { alignItems: 'center', minHeight: '30%', justifyContent: 'space-between' },
    image: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    experience: {
        fontWeight: 'bold',
        color: theme.TEXT_COLOR,
    },
    note: {
        color: theme.TEXT_COLOR,
    },

    divider: {
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: theme.DIVIDER,
        marginVertical: 20,
    },

    education: {
        fontWeight: 'bold',
        marginVertical: 16,
    },

    about: {
        fontWeight: 'bold',
        marginVertical: 20,
    },
    btn: {
        width: width - 28,
        backgroundColor: theme.BUTTON_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        position: 'absolute',
        bottom: 30,
    },

    btnText: {
        marginVertical: 12,
        color: 'white',
    },
});
