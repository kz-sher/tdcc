import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

const GoogleButton = () => {
    return (
        <TouchableHighlight onPress={() => { }} style={styles.btnClick}>
            <View style={styles.btnContainer}>
                <Icon name='google' style={styles.btnIcon} size={25} />
                <Text style={styles.btnText}>Login with Google</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnClick: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.googleRed,
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnIcon: {
        color: 'white'
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        marginTop: 2,
    }
});

export default GoogleButton;
