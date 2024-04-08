import { StyleSheet } from 'react-native';
import { theme } from '~constants/theme.ts';
import { width } from '~constants/dimensions.ts';

export const styles = StyleSheet.create({
    rootWrapper: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
    },

    wrapper: {
        marginTop: 10,
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: width * 0.9,
        marginBottom: 10,
        backgroundColor: theme.USER_BUBBLE_COLOR,
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    left: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        backgroundColor: theme.DIVIDER,
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
