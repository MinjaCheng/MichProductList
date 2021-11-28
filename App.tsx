import React from 'react';
import AddorEditScreen from './source/Screens/AddAndEditScreen';
import HomeScreen from './source/Screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from './source/context/AppContext';
import { setI18nConfig } from './source/helpers/translation/translation';

export default function App() {

  const Stack = createNativeStackNavigator();
  setI18nConfig();
  
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddorEdit" component={AddorEditScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}


