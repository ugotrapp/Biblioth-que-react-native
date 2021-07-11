import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:30
        },
      }}>
        <Stack.Screen name="Home" component={SplashScreen} options={{headerShown: false}}  />
        <Stack.Screen name="Librairie" component={LibraryScreen} />
        <Stack.Screen name="Détails du livre" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
  
  
