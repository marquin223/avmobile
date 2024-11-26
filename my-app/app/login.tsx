import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ImageButton from "../components/ImageButton";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Nome de usuário e senha são obrigatórios!");
      return;
    }
    if (username !== "fulano" || password !== "123") {
      alert("Credenciais inválidas! Nome de usuário ou senha incorretos.");
      return;
    }

    router.push("/listagem");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <ImageButton
        source={require("../assets/images/login.jpeg")}
        onPress={handleLogin}
        style={styles.buttonImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonImage: {
    marginTop: 20,
    width: 200,
    height: 50,
  },
});
