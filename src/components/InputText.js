import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputText = (props) => {
  return (
    <TextInput
      style={styles.inputTextBox}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  inputTextBox: {
    width: 250,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    padding: 5,
  },
});

export default InputText;
