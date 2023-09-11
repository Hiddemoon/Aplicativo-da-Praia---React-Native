import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Botao() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
           Alert.alert('As melhores praias de Pernambuco.')
        }}
      >
        <Text style={styles.buttonText}>Conheça mais sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fc6443',
    padding: 15,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
