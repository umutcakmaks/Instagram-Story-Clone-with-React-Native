import React from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import AddScreen from "../screens/AddScreen";

const BottomBar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "black",
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused, size, colour }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? 'home' : 'home-outline'
                            size = focused ? size + 5 : size + 3;
                        } else if (route.name === "Search") {
                            iconName = focused ? 'search' : 'search-outline'
                            size = focused ? size + 5 : size + 3;
                        } else if (route.name === "Add") {
                            iconName = focused ? 'film' : 'film-outline'
                            size = focused ? size + 5 : size + 3;
                        } else if (route.name === "Favourite") {
                            iconName = focused ? 'heart' : 'heart-outline'
                            size = focused ? size + 5 : size + 3;
                        } else if (route.name === "Profile") {
                            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline'
                            size = focused ? size + 5 : size + 3;
                        }
                        return <Ionic name={iconName} size={size} colour={colour}></Ionic>
                    },
                })}

            >
                <Tab.Screen name="Home" options={{ headerTitleAlign: "center", title: "Instagram", headerTitleStyle: { fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto' } }} component={HomeScreen} />
                <Tab.Screen name="Search" options={{ headerTitleAlign: "center", title: "Instagram", headerTitleStyle: { fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto' } }} component={SearchScreen} />
                <Tab.Screen name="Add" options={{ headerTitleAlign: "center", title: "Instagram", headerTitleStyle: { fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto' } }} component={AddScreen} />
                <Tab.Screen name="Favourite" options={{ headerTitleAlign: "center", title: "Instagram", headerTitleStyle: { fontWeight: "bold", fontSize: 18, fontFamily: 'Roboto' } }} component={FavouriteScreen} />
                <Tab.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomBar;