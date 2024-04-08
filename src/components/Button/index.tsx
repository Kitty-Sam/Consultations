import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '~components/Button/style.ts';

export interface IProps {
    title: string;
    onClick: () => void;
}

export const Button: FC<IProps> = ({ title, onClick }) => (
    <TouchableOpacity onPress={onClick} style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
);
