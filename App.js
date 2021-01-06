import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
	const [enteredItem, setGroceryItem] = useState("");
	const [listItems, setListItems] = useState([]);
	
	const itemsInputHandler = (enteredText) => {
		setGroceryItem(enteredText);
	};
	
   const addItemToList = () => {
		setListItems( currentList => [...currentList , enteredItem]);
	};

	return (
		<View style={styles.container}>
			{/*Input Container*/}
			<View style={styles.inputContainer}>
				<TextInput
				   onChangeText={itemsInputHandler}
					placeholder='Shopping List Items'
					style={styles.input}
					value={enteredItem}
				/> 
				<Button title="Add" onPress={addItemToList} style={styles.button}/>
         </View>
			
			{/*Array of items*/}
			<View>
				{listItems.map( item => 
					<View style={styles.listItem} key={item}><Text>
						{item}
					</Text></View>
				)}
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
	},
	listItem: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});