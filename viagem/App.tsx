/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './navigation';
import React from 'react';

export default function App() {
    return (
            <Navigation />
    )

}
AppRegistry.registerComponent(appName, () => App);
