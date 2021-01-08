import React, { useState } from 'react';
import { ScreenContainer } from "react-native-screens";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function SignIn({ navigation }) {
   
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={ () => alert("todo")} />
            <Button title="Create Account" onPress={ () => navigation.push("CreateAccount") } />
        </ScreenContainer>
    );
};

export function CreateAccount() {
	return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <Button title ="Sign Up" onPress={ () => alert("Todo")}/>
        </ScreenContainer>
    );
}

export const SignOut = () => {
	return (
    <ScreenContainer>
        <Text>SignOut</Text>
        <Button title ="Sign Out" onPress={ () => alert("Todo")}/>
    </ScreenContainer>
)}

export const Splash = () => {
	return (
    <ScreenContainer>
        <Text>Loading...</Text>
    </ScreenContainer>
)}

export const Profile = () => {
	return (
    <ScreenContainer>
        <Text>Profile Screen</Text>
    </ScreenContainer>
)}

export const Home = () => {
	return (
    <ScreenContainer>
        <Text>Home Screen</Text>
    </ScreenContainer>
)}