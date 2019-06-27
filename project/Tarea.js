import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tarea = ({ item, eliminar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{item.texto}</Text>
      <TouchableOpacity onPress={() => eliminar(item.key)}>
        <Ionicons
          name="md-trash"
          size={24}
          color="gray" //Se encuentran en expo..React.
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  texto: {
    fontSize: 24
  }
});

export default Tarea;
