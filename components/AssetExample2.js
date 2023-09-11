import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExamplui() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>2 - Baía dos Porcos, Fernando de Noronha</Text>
      <Image style={styles.logo} source={require('../assets/praia_bonita2.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centralizar horizontalmente
    padding: 12,
    width: '80%',
    backgroundColor: '#22cfb0',
    borderRadius: 15,
    margin: 15,
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    height: 200,
    width: '100%',
    borderRadius: 15,
  },
});
