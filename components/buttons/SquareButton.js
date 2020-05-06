import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SquareButton = (props) => {
    const { icon, handlePress } = props;
    return (
        <TouchableOpacity onPress={handlePress} style={[styles.btnContainer, props.style]}>
            <Icon name={icon} style={styles.btnIcon} size={25} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 5,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnIcon: {
        color: 'white'
    }
});

export default SquareButton;
