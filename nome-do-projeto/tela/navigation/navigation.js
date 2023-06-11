import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Tela_Cadastro from '../Tela_Cadastro';
import Tela_Inicio from '../TelaInicio';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicio" component={Tela_Inicio} />
        <Stack.Screen name="Cadastro" component={Tela_Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
