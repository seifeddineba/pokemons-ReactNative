import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import PokemonCard from "../components/PokemonCard";
import { CollectionContext } from "../context/contextApi";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";

const CollectionScreen = () => {
  const { collection } = useContext(CollectionContext);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <FlatList
        data={collection}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard image={item.sprites.back_default} name={item.name} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 30,
    fontWeight: "bold",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  list: {
    padding: 10,
  },
});

export default CollectionScreen;
