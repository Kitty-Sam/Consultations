import { Dimensions, Platform, StatusBar } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const heightStatus = Platform.OS === 'android' ? StatusBar.currentHeight : 36;
