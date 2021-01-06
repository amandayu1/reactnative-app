import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
	const [groceryItem, getGroceryItem] = useState("");
	
	const itemsInputHandler = groceryItem => {
		getGroceryItem(groceryItem);
	};
	
   const addGroceryItem = () => {
     
	};

	return (
		<View style={styles.container}>
			{/*Input Container*/}
			<View style={styles.inputContainer}>
				<TextInput
				   onChangeText={itemsInputHandler}
					placeholder='Shopping List Items'
					style={styles.input}
					value={groceryItem}
				/> 
				<Button title="Add" style={styles.button}/>
         </View>
			
			{/*Array of items*/}
			<View>
            
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 50
	},
	inputContainer:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input:{
		width: '70%',
		borderColor: 'blue',
		borderWidth: 1,
		padding: 10
	}
});