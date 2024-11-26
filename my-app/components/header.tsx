import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

const Header = () => {
  const router = useRouter();
  const segments = useSegments();
  const { showActionSheetWithOptions } = useActionSheet();

  const getTitle = () => {
    if (segments[0] === "listagem") return "Listagem";
    if (segments[0] === "sobre") return "Sobre";
    return "App";
  };

  const openMenu = () => {
    const options = ["Sobre", "Logout", "Cancelar"];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0 && segments[0] === "listagem") {
          router.push("/sobre");
        } else if (buttonIndex === 1) {
          router.replace("/"); // Redireciona para login
        }
      }
    );
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{getTitle()}</Text>
      <TouchableOpacity onPress={openMenu}>
        <Ionicons name="menu" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#40e0d0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
