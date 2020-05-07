import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';

const GoogleButton = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={styles.container}>
            <Icon name='google' style={styles.icon} size={25} />
            <StyledText style={styles.text}>Login with Google</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingVertical: 20,
        height: 'auto',
        backgroundColor: Colors.googleRed,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5
    },
    icon: {
        color: 'white',
        marginRight: 20
    },
    text: {
        color: 'white'
    }
});

export default GoogleButton;
