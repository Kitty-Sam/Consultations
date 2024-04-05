import { StyleSheet } from 'react-native';
import { theme } from '~constants/theme.ts';

export const styles = StyleSheet.create({
    rootWrapper: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        gap: 20,
        marginHorizontal: 14,
    },
    cardWrapper: {
        marginTop: 20,
    },
    select: {
        borderBottomWidth: 1,
        borderBottomColor: theme.DIVIDER,
        padding: 16,
        borderRadius: 4,
        width: '100%',
    },

    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.DIVIDER,
        paddingTop: 16,
        paddingLeft: 16,
        borderRadius: 4,
        width: '100%',
        minHeight: '20%',
    },
});
