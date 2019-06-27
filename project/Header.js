import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Header = ({ cambiarTexto, agregar, texto }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.texto}
        onChangeText={cambiarTexto}
        placeholder="Aqui escribe tu texto..."
        onSubmitEditing={agregar}
        value={texto}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#00ff00",
    justifyContent: "center"
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  }
});

export default Header;
