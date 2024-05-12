import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {M00_Home} from './app/views/M00_Home';

import {M06_Home} from './app/views/M06_Home_routing';
import {Guerras} from './app/views/Guerras';
import {M07_Camera} from './app/views/M07_Camera';
import {VeureGuerresReligions} from './app/views/SqliteVer';
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
       <Stack.Screen name="Zero" component={M00_Home} />
        <Stack.Screen name="Home" component={M06_Home} />
        <Stack.Screen name="Guerras" component={Guerras} />
        <Stack.Screen name="Camera" component={M07_Camera} />
        <Stack.Screen name="Ver" component={VeureGuerresReligions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;