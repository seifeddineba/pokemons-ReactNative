import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Pagination = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Ybutton}
        onPress={props.handlePreviousPage}
        disabled={props.page <= 1}
      >
        <Text style={styles.textButton}>Previous</Text>
      </TouchableOpacity>
      <Text>Page : {props.page}</Text>
      <TouchableOpacity style={styles.Bbutton} onPress={props.handleNextPage}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  Ybutton: {
    backgroundColor: "#FFCC01",
    borderRadius: 8,
    padding: 10,
  },
  Bbutton: {
    backgroundColor: "#3265B0",
    borderRadius: 8,
    padding: 10,
  },
  textButton: {
    color: "white",
    fontSize: 14,
  },
});

export default Pagination;
