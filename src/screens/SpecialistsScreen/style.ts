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
});
