import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import AssetExamplui from './components/AssetExample2';
import AssetExamplai from './components/AssetExample3';
import Botao from './components/botao';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.paragraph}>Lucas Ventura 3º C</Text>
        <Text style={styles.titulo}>As melhores praias de Pernambuco</Text>
        <AssetExample />
        <AssetExamplui />
        <AssetExamplai />
        <Botao />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9b1',
    padding: 8,
  },
  scrollViewContent: {
    alignItems: 'center', // Centralizar horizontalmente
    justifyContent: 'center', // Centralizar verticalmente (opcional)
  },
  paragraph: {
    margin: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#fc6443',
    width: '100%',
    padding: 22,
  },

  titulo: {
    padding: 18,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    color: '#fc6443',
  },
});
