import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';

export type ScreenStyleType = {
    wrapper: ViewStyle;
    textWrapper: ViewStyle;
    container: ViewStyle;
    image: ImageStyle;
};

export const styles = StyleSheet.create<ScreenStyleType>({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
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
});
