import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import Tarea from "./Tarea";

const Body = ({ tareas, eliminar, cargando }) => {
  return (
    <View style={styles.container}>
      {cargando ? (
        <ActivityIndicator size="large" color="#640064" />
      ) : (
        <FlatList
          data={tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={eliminar} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "#98fb98"
  }
});

export default Body;
