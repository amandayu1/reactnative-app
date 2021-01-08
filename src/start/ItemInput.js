import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const ItemInput = (props) => {
  const [enteredItem, setGroceryItem] = useState("");

  const itemsInputHandler = (enteredText) => {
    setGroceryItem(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={itemsInputHandler}
        placeholder="Shopping List Items"
        style={styles.input}
        value={enteredItem}
      />
      <Button
        title="Add"
        onPress={() => props.onAddItem(enteredItem)}
        style={styles.button}
      />{" "}
      {/*no button styles yet*/}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "70%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
});

export default ItemInput;
