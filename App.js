import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';
import firebaseConfig from './config/firebase';
import OfflineSnackBar from './components/layout/OfflineSnackBar';
import './fix/setting-timer-bug';

firebase.initializeApp(firebaseConfig);
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
            <Provider store={store}>
                <AppNavigator />
                <OfflineSnackBar />
            </Provider>
        );
    }
}

export default App;