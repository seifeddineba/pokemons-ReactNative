import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import { GETALLPOKEMONS } from "../services/webServices";
import { CollectionContext } from "../context/contextApi";
import { useNavigation } from "@react-navigation/native";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";

const PokemonsScreen = () => {
  const navigate = useNavigation();
  const { collection, setCollection } = useContext(CollectionContext);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ offset: 8, limit: 8 });

  useEffect(() => {
    getPokemons();
  }, [filter]);

  const getPokemons = async () => {
    const pokemons = await GETALLPOKEMONS(filter);
    setData(pokemons);
  };

  const addToMyCollection = (item) => {
    let newCollection = collection;
    const pokemonExists = collection.find(
      (pokemon) => pokemon.name === item.name
    );

    if (!pokemonExists) {
      newCollection.push(item);
      setCollection(newCollection);
    }
  };

  const handlePreviousPage = () => {
    setFilter({ ...filter, offset: filter.offset - filter.limit });
  };

  const handleNextPage = () => {
    setFilter({ ...filter, offset: filter.offset + filter.limit });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            image={item.sprites.back_default}
            name={item.name}
            addToMyCollection={() => addToMyCollection(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      <Pagination
        page={filter.offset / filter.limit}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
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

export default PokemonsScreen;
