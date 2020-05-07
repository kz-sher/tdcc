import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

const HeaderRight = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.header}>
            <Icon name='exit-to-app' style={styles.headerIcon} size={28} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIcon: {
        color: Colors.primary,
        paddingHorizontal: 10
    },
});
export default HeaderRight;
