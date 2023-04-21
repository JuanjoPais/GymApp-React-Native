import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StackScreen from "./screens/StackScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
	return (
		<HomeStackNavigator.Navigator initialRouteName="HomeScreen">
			<HomeStackNavigator.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			></HomeStackNavigator.Screen>
			<HomeStackNavigator.Screen
				name="Stack"
				component={StackScreen}
				options={{
					headerShown: false,
					headerBackTitleVisible: false,
				}}
			></HomeStackNavigator.Screen>
		</HomeStackNavigator.Navigator>
	);
}

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "blue",
			}}
		>
			<Tab.Screen
				name="Home"
				component={MyStack}
				options={{
					tabBarIcon: ({color, size}) => {
						return (
							<MaterialCommunityIcons name="home" color={color} size={size} />
						);
					},
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({color, size}) => {
						return <Ionicons name="settings" size={size} color="blue" />;
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({color, size}) => {
						return <Entypo name="user" size={size} color="blue" />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}
