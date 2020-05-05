import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Logo from '../svg/Logo';
import GoogleButton from '../buttons/GoogleButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.btnContainer}>
                <GoogleButton />
                {/* <GoogleButton /> */}
                {/* <Button title='Guest' /> */}
            </View>
            <View style={styles.copyright}>
                <Text style={{ color: 'white' }}>Developed By Kz Sherwin</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#141414',
    },
    logoContainer: {
        // flex: ,
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        // flex: 1,
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyright: {

    }
});
export default HomeScreen;