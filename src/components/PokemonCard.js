import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const PokemonCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.img} source={{ uri: props.image }} />
      <Text>Name : {props.name}</Text>

      {props.addToMyCollection && (
        <TouchableOpacity
          style={styles.button}
          onPress={props.addToMyCollection}
        >
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "47%",
    backgroundColor: "#DDF2FD",
    borderRadius: 8,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingR: 15,
    gap: 10,
    margin: 5,
  },
  img: {
    objectFit: "contain",
    width: "100%",
    aspectRatio: "2/3",
  },

  button: {
    padding: 8,
    backgroundColor: "#FFC436",
    borderRadius: 8,
  },
  textButton: {
    color: "white",
    fontSize: 14,
  },
});

export default PokemonCard;
