import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import StyledText from '../general/StyledText';
import NetInfo from '@react-native-community/netinfo';
import Colors from '../../constants/Colors';

const OfflineSnackBar = () => {

    const [hasInternet, setHasInternet] = useState(true)
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setHasInternet(state.isConnected);
        });
        return () => {
            unsubscribe()
        }
    }, []);

    // display nothing if connected to internet
    if (hasInternet) return null;

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <StyledText style={styles.text}>Internet Disconnected</StyledText>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    wrapper: {
        backgroundColor: Colors.info,
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 10,
        marginBottom: 5
    }
});

export default OfflineSnackBar;
