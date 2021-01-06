import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start working on your app!")
  return (
    <View style={styles.container}>
      <View style={{padding: 30}}>
      <TextInput placeholder="What's up? Type here." style={{padding: 10, borderColor: "blue", borderWidth:1}}/>
      <Button title="Hello, bitches"/>
      
      </View>
      
      <View>
      <Text></Text>
      </View>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', },
   
});
