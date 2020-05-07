import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../components/layout/HeaderLeft';
import HeaderRight from '../components/layout/HeaderRight';
import HomeScreen from '../components/screens/HomeScreen';
import GuestLoginScreen from '../components/screens/GuestLoginScreen';
import MainScreen from '../components/screens/MainScreen';
import Colors from '../constants/Colors';
import AddNewTaskScreen from '../components/screens/AddNewTaskScreen';

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
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='GuestLogin' component={GuestLoginScreen} options={{ headerRight: null }} />
                <Stack.Screen name='Main' component={MainScreen} options={{ canGoBack: false }} />
                <Stack.Screen name='AddNewTask' component={AddNewTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;