import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../layout/Logo';
import GoogleButton from '../buttons/GoogleButton';
import GuestButton from '../buttons/GuestButton';
import StyledText from '../general/StyledText';
import Colors from '../../constants/Colors';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoSection}>
                <Logo />
            </View>
            <View style={styles.btnSection}>
                <GoogleButton />
                <GuestButton />
            </View>
            <View style={styles.copyright}>
                <StyledText style={styles.copyrightTxt}>Developed By Kz Sherwin</StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor,
    },
    logoSection: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSection: {
        flex: 2,
        justifyContent: 'space-evenly'
    },
    copyright: {
        paddingVertical: 15,
        alignItems: 'center'
    },
    copyrightTxt: {
        fontSize: 8,
        color: 'white'
    }
});
export default HomeScreen;