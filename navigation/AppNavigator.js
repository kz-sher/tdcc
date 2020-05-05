import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen name='home' options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name='profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;