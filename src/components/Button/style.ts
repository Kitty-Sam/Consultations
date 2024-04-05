import { StyleSheet } from 'react-native';
import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';

export const styles = StyleSheet.create({
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
