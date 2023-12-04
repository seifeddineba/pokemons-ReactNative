import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Ybutton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.textButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFCC01",
    borderRadius: 8,
    padding: 10,
  },
  textButton: {
    color: "white",
    fontSize: 14,
  },
});
export default Ybutton;
