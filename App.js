import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';

const App = ({ skipLoadingScreen }) => {

    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                    'montserrat-lightitalic': require('./assets/fonts/Montserrat/Montserrat-LightItalic.ttf'),
                    'montserrat-regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
                    'montserrat-semibold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !skipLoadingScreen) {
        return null;
    } else {
        return (
            <AppNavigator />
        );
    }
}

export default App;