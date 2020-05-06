import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';
import SquareButton from '../buttons/SquareButton';
import { CommonActions } from '@react-navigation/native';

const GuestLoginScreen = ({ navigation }) => {
    const [name, setName] = useState('guest-john-doe');
    const truncateName = name => {
        if (name.length > 20) return name.slice(0, 20) + '...';
        return name;
    }
    const handleChange = name => {
        name = name.toLowerCase().replace(/ /g, '-');
        setName(`guest-${ name }`);
    }
    const handleSubmit = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: 'main' }],
            })
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.labelSection}>
                <StyledText>Preferred Name</StyledText>
                <StyledText weight='lightitalic' style={styles.previewName}>{truncateName(name)}</StyledText>
            </View>
            <TextInput
                onChangeText={handleChange}
                placeholder='John Doe'
                placeholderTextColor={Colors.primary}
                style={styles.input}
                maxLength={40}
            />
            <SquareButton
                icon='person-add'
                style={styles.addGuestBtn}
                handlePress={handleSubmit}
            />
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
export default GuestLoginScreen;
