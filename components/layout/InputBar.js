import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const InputBar = ({ style = {}, placeholder = '', maxLength = 40, multiline = false, handleChange }) => {
    return (
        <TextInput
            onChangeText={handleChange}
            placeholder={placeholder}
            placeholderTextColor={Colors.primary}
            style={[styles.input, style]}
            maxLength={maxLength}
            multiline={multiline}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 16,
        paddingHorizontal: 6,
        color: Colors.primary,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: Colors.primary,
    },
});

export default InputBar;
