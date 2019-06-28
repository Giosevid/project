import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RootsNoAutenticated from './components/NoAutentications/RootsNoAutenticated'

export default function App() {
  return (
    <View style={styles.container}>
      <RootsNoAutenticated/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
