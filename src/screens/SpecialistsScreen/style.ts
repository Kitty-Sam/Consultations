import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';

export const styles = StyleSheet.create({
    rootWrapper: { flex: 1 },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        marginVertical: 28,
        marginHorizontal: 14,
        fontSize: 16,
    },
    container: {
        width: width - 28,
        marginBottom: 14,
        borderRadius: 16,
        borderColor: theme.USER_BUBBLE_COLOR,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 12,
        flexDirection: 'column',
        gap: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    textWrapper: {
        flexDirection: 'row',
        gap: 14,
    },
    bold: {
        fontSize: 16,
        fontWeight: '600',
        color: theme.TITLE_COLOR,
    },
    secondary: {
        fontSize: 14,
        color: theme.TEXT_COLOR,
    },
});
