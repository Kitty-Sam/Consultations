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
        width: width - 28,
        marginTop: 10,
    },
});
