import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import StyledText from '../general/StyledText';
import SquareButton from '../buttons/SquareButton';
import InputBar from '../layout/InputBar';
import { setUsername } from '../../actions/auth.action';

const GuestLoginScreen = ({ navigation, setUsername }) => {
    const guestId = Math.floor(Math.random() * (500)) + 1;
    const [name, setName] = useState(`guest-${ guestId }-john-doe`);
    const truncateName = name => {
        if (name.length > 20) return name.slice(0, 20) + '...';
        return name;
    }
    const handleChange = name => {
        name = name.toLowerCase().replace(/ /g, '-');
        setName(`guest-${ guestId }-${ name }`);
    }
    const handleSubmit = () => {
        setUsername(name);
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: 'Main' }],
            })
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <StyledText>Preferred Name</StyledText>
                <StyledText weight='lightitalic' style={styles.previewName}>{truncateName(name)}</StyledText>
            </View>
            <InputBar
                style={styles.input}
                handleChange={handleChange}
                placeholder='John Doe'
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
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        marginTop: 14,
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
export default connect(null, { setUsername })(GuestLoginScreen);
