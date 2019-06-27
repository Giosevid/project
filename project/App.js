import React, { useState, useEffect } from "react";
import { StyleSheet, View, AsyncStorage, Button } from "react-native";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  useEffect(() => {
    recuperar();
  }, []);

  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const establecerTexto = value => setTexto(value);

  const agregarTarea = () => {
    const nuevasTareas = [...tareas, { texto, key: String(Date.now()) }];
    guardarenTelefono(nuevasTareas);
    setTareas(nuevasTareas);
    setTexto("");
  };

  const eliminarTareas = id => {
    const nuevasTareas = tareas.filter(tarea => tarea.key !== id);
    guardarenTelefono(nuevasTareas);
    setTareas(nuevasTareas);
  };

  const guardarenTelefono = tareas => {
    AsyncStorage.setItem("@claveAsyc:array", JSON.stringify(tareas))
      .then(valor => console.log(valor))
      .catch(error => console.log(error));
  };

  const recuperar = () => {
    AsyncStorage.getItem("@claveAsyc:array")
      .then(valor => {
        setTareas(JSON.parse(valor));
        setCargando(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Header
        texto={texto}
        cambiarTexto={establecerTexto}
        agregar={agregarTarea}
      />
      <Button title="Agregar" onPress={guardarenTelefono} />
      <Button title="Recuperar" onPress={recuperar} />
      <Body tareas={tareas} eliminar={eliminarTareas} cargando={cargando} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
