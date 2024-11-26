import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Versão: 1.0.0</Text>
        <Text style={styles.text}>Desenvolvido por: Marcos Costa</Text>
        <Text style={styles.text}>GitHub: https://github.com/marquin223/</Text>
      </View>
    </View>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "lightslategrey",
    borderRadius: 20,
    margin: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
});
