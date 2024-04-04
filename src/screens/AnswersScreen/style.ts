import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';
import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export type AnswersStyleType = {
    container: ViewStyle;
    image: ImageStyle;
    textWrapper: ViewStyle;
    topicWrapper: ViewStyle;
    wrapper: ViewStyle;
};

export const styles = StyleSheet.create<AnswersStyleType>({
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
    topicWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
});
