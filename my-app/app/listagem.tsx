import React from "react";
import { SectionList, Text, View, Image, StyleSheet } from "react-native";
import { organizeByOrigin } from "../helpers/helper";
import Header from "../components/header";

const Listagem = () => {
  const sections = organizeByOrigin();

  return (
    <View style={styles.container}>
      <Header></Header>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.passenger_avatar }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{item.passenger_name}</Text>
              <Text style={styles.details}>
                Origem: {item.origin} - Destino: {item.destination}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Listagem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#40e0d0",
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
});
