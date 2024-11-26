import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../components/header";

const Sobre = () => {
  const handleOpenGitHub = () => {
    Linking.openURL("https://github.com/marquin223/avmobile");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Versão: 1.0.0</Text>
        <Text style={styles.text}>Desenvolvido por: Seu Nome</Text>
        <TouchableOpacity onPress={handleOpenGitHub}>
          <Text style={[styles.text, styles.link]}>
            GitHub: https://github.com/seu-repositorio
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
