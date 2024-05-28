import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import ConfirmeCompra from './confirmeCompra';
import ConversorMoeda from './conversorMoeda';
import HallMoedas from './hallMoedas';
import Configuracoes from './Configuracoes';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login} />
        <Stack.Screen
          name='Cadastro'
          component={Cadastro} />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name='ConfirmeCompra'
          component={ConfirmeCompra}
        />
        <Stack.Screen
          name='ConversorMoeda'
          component={ConversorMoeda}
        />
        <Stack.Screen
          name='HallMoeda'
          component={HallMoedas}
        />
        <Stack.Screen
          name='Configuracoes'
          component={Configuracoes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;