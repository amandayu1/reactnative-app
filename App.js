import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { SignIn, CreateAccount, Profile, Home} from "./src/screens/SignIn";

export default function App() {
  const AuthStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Profile" component={Profile}/>
      </Tabs.Navigator>
      {/*
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
      */}
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
