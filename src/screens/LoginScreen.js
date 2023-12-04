import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import InputText from "../components/InputText";
import Ybutton from "../components/Ybutton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [authObj, setAuthObj] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigation();
  const login = () => {
    if (authObj.login === "Admin" && authObj.password === "admin") {
      navigate.push("Pokemons");
    } else {
      Alert.alert("Login failed", "Wrong login or passowrd !", [
        { text: "OK" },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/imgs/pokemon-logo.png")}
      />
      <InputText
        onChangeText={(text) => setAuthObj({ ...authObj, login: text })}
        value={authObj.login}
        placeholder="Login"
      />
      <InputText
        onChangeText={(text) => setAuthObj({ ...authObj, password: text })}
        value={authObj.password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Ybutton onPress={login} text="LOGIN" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 20,
    backgroundColor: "#6DB9EF",
  },
  logo: {
    width: 250,
    height: 90,
  },
});
export default LoginScreen;
