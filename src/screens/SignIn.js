import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  signIn: {
    flex: 1,
    marginTop: "10%",
    color: "black",
    backgroundColor: "#FA89A7",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: "black",
    color: "black",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export function SignIn({ navigation }) {
    const {signIn} = React.useContext(AuthContext);

    return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn() } />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
}

export function CreateAccount() {
    const {signUp} = React.useContext(AuthContext);
    return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
}

export const SignOut = () => {
  return (
    <ScreenContainer>
      <Text>SignOut</Text>
      <Button title="Sign Out" onPress={() => alert("Todo")} />
    </ScreenContainer>
  );
};

export const Splash = () => {
  return (
    <ScreenContainer>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
};

export const Profile = () => {
    const {signOut} = React.useContext(AuthContext);
    
    return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={ () => signOut()} />
    </ScreenContainer>
  );
};

export const Home = () => {
  return (
    <ScreenContainer>
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
};