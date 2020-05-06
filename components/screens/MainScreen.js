import React, { useState } from 'react';
import { View, Button, TextInput, StatusBar, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';
import SquareButton from '../buttons/SquareButton';

const MainScreen = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    labelSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 16,
        marginTop: 14,
        paddingHorizontal: 6,
        color: Colors.primary,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    previewName: {
        paddingHorizontal: 6,
        fontSize: 10,
    },
    addGuestBtn: {
        marginTop: 14,
        backgroundColor: Colors.success,
    }
});
export default MainScreen;
