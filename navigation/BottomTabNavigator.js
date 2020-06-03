import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoTaskScreen from '../components/screens/TodoTaskScreen';
import CompletedTaskScreen from '../components/screens/CompletedTaskScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();
const TabBarOptions = {
    style: {
        borderTopColor: 'transparent',
        backgroundColor: Colors.primary,
    },
    activeTintColor: Colors.bgColor,
    inactiveTintColor: Colors.secondary,

}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={TabBarOptions}>

            <Tab.Screen
                name='TodoTask'
                component={TodoTaskScreen}
                options={{
                    title: 'To-Do',
                    tabBarIcon: ({ color, size }) => <Icon name='view-list' color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name='CompletedTask'
                component={CompletedTaskScreen}
                options={{
                    title: 'Completed',
                    tabBarIcon: ({ color, size }) => <Icon name='playlist-add-check' color={color} size={size} />,
                }}
            />
        </Tab.Navigator >
    )
}

export default BottomTabNavigator;
