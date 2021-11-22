import React from 'react';
import AddAndEditScreen from './source/Screens/AddAndEditScreen';
import HomeScreen from './source/Screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Add" component={AddAndEditScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit" component={AddAndEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


