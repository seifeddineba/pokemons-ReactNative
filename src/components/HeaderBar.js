import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HeaderBar = (props) => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={() => navigate.push("Pokemons")}
      >
        <Text style={styles.buttonText}>Pokemons</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.greenButton]}
        onPress={() => navigate.push("Collection")}
      >
        <Text style={styles.buttonText}>Collection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  redButton: {
    backgroundColor: "#FF0000", // Red color
  },
  greenButton: {
    backgroundColor: "#BED754", // Yellow color
  },
});

export default HeaderBar;
