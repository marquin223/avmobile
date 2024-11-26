import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Login from "./login";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Login></Login>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
});
