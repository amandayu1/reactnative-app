import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, CreateAccount } from '../screens/SignIn';

const AuthStack= createStackNavigator();

function Index() {
	return (
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        </AuthStack.Navigator>
    </NavigationContainer>
)};

export default Index;
