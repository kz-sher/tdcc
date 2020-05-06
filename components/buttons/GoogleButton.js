import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';

const GoogleButton = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={styles.btnContainer}>
            <Icon name='google' style={styles.btnIcon} size={25} />
            <StyledText weight='semibold' style={styles.btnText}>Login with Google</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginHorizontal: 20,
        paddingVertical: 20,
        height: 'auto',
        backgroundColor: Colors.googleRed,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnIcon: {
        color: 'white',
        marginRight: 20
    },
    btnText: {
        color: 'white'
    }
});

export default GoogleButton;
