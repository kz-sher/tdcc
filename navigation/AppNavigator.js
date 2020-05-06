import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../components/layout/HeaderLeft';
import HeaderRight from '../components/layout/HeaderRight';
import HomeScreen from '../components/screens/HomeScreen';
import GuestLoginScreen from '../components/screens/GuestLoginScreen';
import MainScreen from '../components/screens/MainScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const AppNavigator = () => {

    const screenOptions = {
        headerLeft: props => <HeaderLeft {...props} />,
        headerRight: props => <HeaderRight {...props} />,
        headerTitle: null,
        headerStyle: {
            backgroundColor: Colors.bgColor,
            shadowColor: 'transparent',
        },

    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={screenOptions}>
                <Stack.Screen name='home' options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name='guest-login' component={GuestLoginScreen} options={{ headerRight: null }} />
                <Stack.Screen name='main' component={MainScreen} options={{ canGoBack: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;