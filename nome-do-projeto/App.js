import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Tela_Cadastro from './tela/Tela_Cadastro';

import Tela_Inicio from './tela/TelaInicio';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu Aplicativo Expo</Text>

      <Tela_Cadastro/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default App;