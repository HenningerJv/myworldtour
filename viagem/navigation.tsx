import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import ConfirmeCompra from './confirmeCompra';
import ConversorMoeda from './conversorMoeda';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmeCompra"
          component={ConfirmeCompra}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConversorMoeda"
          component={ConversorMoeda}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;