//Jose Salvador Medina Olguin  TI02SM-18
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import registro from './src/Registro';
import Movies from './src/movies';
import Pokemon from './src/Pokemon';
const Stack = createStackNavigator ();


const App: () => React$Node = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name= 'Login'
        component={Login}/>
      <Stack.Screen
        name='Registro'
        component={registro}/>
      <Stack.Screen
        name= 'Movies'
        component={Movies}/>
      <Stack.Screen
        name= 'Pokemon'
        component={Pokemon}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
};


export default App;
