import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SquareButton = ({ style = {}, icon = 'add', disabled = false, handlePress }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={handlePress} style={[styles.container, style]}>
            <Icon name={icon} style={styles.icon} size={25} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: 'white'
    }
});

export default SquareButton;
