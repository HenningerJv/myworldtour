/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import ConfirmeCompra from './confirmeCompra';
import ConversorMoeda from './conversorMoeda';
import HallMoedas from './hallMoedas';
import Configuracoes from './Configuracoes';


export default function App() {
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
}
AppRegistry.registerComponent(appName, () => App);
