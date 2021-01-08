import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {AuthContext} from './context'

import {
  SignIn,
  CreateAccount,
  Profile,
  Home,
  Splash,
} from "./src/screens/SignIn";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeStackScreen} />
          <Tabs.Screen name="Profile" component={ProfileStackScreen} />
        </Tabs.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="SignIn">
    
        <AuthStack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: "Create Account" }}
          />    
          <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Sign In" }}
          />
          
        </AuthStack.Navigator>
      )}      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
});