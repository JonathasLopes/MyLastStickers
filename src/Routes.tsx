import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from './assets/GlobalStyles';
import { BookOpen } from "react-native-feather";
import Home from './screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const MyTheme = {
    dark: false,
    colors: {
        primary: COLORS.white,
        background: COLORS.background,
        card: COLORS.background,
        text: COLORS.white,
        border: COLORS.background,
        notification: COLORS.background,
    },
};

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName={'Home'} detachInactiveScreens screenOptions={{ gestureEnabled: false }}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Cromos"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.inactive,
                tabBarLabelStyle: {
                    marginBottom: 5,
                    marginTop: -10,
                },
                tabBarStyle: {
                    borderTopRightRadius: 24,
                    borderTopLeftRadius: 24,
                    height: 60,
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Cromos') {
                        return <BookOpen width={size} color={color} />
                    }
                }
            })}
        >
            <Tab.Screen name="Cromos" component={HomeNavigator} />
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
                <StatusBar barStyle="light-content" />
                <Stack.Navigator initialRouteName={'Home'} detachInactiveScreens screenOptions={{ gestureEnabled: false }}>
                    <Stack.Screen
                        name="Home"
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}

export default Routes;