import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { SignIn, CreateAccount, Profile, Home} from "./src/screens/SignIn";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
  </ProfileStack.Navigator>
)

export default function App() {
  const [userToken, setUserToken] = React.useState(null);

  
  return (
    <NavigationContainer style={styles.container}>
      {userToken ? (
        <Tabs.Navigator style={styles.container}>
        <Tabs.Screen name="Home" component={HomeStackScreen}/>
        <Tabs.Screen name="Profile" component={ProfileStackScreen}/>
        </Tabs.Navigator>
      ):
      
      <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Create Account" }}
      />
      </AuthStack.Navigator>
      }
  </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
