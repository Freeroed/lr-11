import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import ListScreen from './List';
import ButtonScreen from './Button';

const RootStack = createBottomTabNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Button" component={ButtonScreen} />
                <RootStack.Screen name="List" component={ListScreen} />

            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;