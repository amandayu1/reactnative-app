import React, { useState } from 'react';
import { ScreenContainer } from "react-native-screens";
import { StyleSheet, Text, View, Button } from 'react-native';


function CreateAccount() {
	return (
    <ScreenContainer>
        <Text>SignOut</Text>
        <Button title ="Sign Out" onPress={ () => alert("Todo")}/>
    </ScreenContainer>
)}

export default CreateAccount;