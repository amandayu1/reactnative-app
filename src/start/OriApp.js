import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList} from 'react-native';
import GroceryItem from './components/GroceryItem';
import ItemInput from './components/ItemInput';

export default function App() {
	
	const [listItems, setListItems] = useState([]);
	
   {/*The list array of item objects with 2 fields*/}
	const addItemToList = itemDescription => {
		setListItems( currentList => [...currentList , // take the existing array and add to it
			{
				key: Math.random().toString(), // key must be a string
				value: itemDescription
			}
		]);
	};

	return (
		<View style={styles.container}>
			{/*Input Container*/}
			<ItemInput onAddItem={addItemToList} />
			
			{/*Display a list of items*/}
			<FlatList data={listItems} renderItem={ itemData =>
				<GroceryItem description={itemData.item.value}/>
			}/>
		</View>
		
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 50
	}
});