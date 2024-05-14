import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from './app/views/Routing';
import {Guerras} from './app/views/Guerras';
import {Camara} from './app/views/Camara';
import {VeureGuerresReligions} from './app/views/CSVVer';
import {Sqlite} from './app/views/Sqlite';
/**
 * Modificacions al component principal d'entrada de React
 * per incloure encaminaments, però no components
 * @version 1.0 28.03.2020
 * @author sergi.grau@fje.edu
 */

const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Guerras" component={Guerras} />
        <Stack.Screen name="Camera" component={Camara} />
        <Stack.Screen name="Ver" component={VeureGuerresReligions} />
        <Stack.Screen name="SQLite" component={Sqlite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;