import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePage from './app/screens/ProfilePage';
import EditNumber from './app/screens/EditNumber';
import EditName from './app/screens/EditName';
import EditEmail from './app/screens/EditEmail';
import EditPhoto from './app/screens/EditPhoto';
import EditBio from './app/screens/EditBio';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name=" " 
          component={ProfilePage}
          initialParams={{ 
            phone: "",
            name: "",
            email: ""
          }}
        />
        <Stack.Screen 
          name="Edit Name" 
          component={EditName}
        />
        <Stack.Screen 
          name="Edit Number" 
          component={EditNumber}
        />
        <Stack.Screen 
          name="Edit Email" 
          component={EditEmail}
        />
        <Stack.Screen 
          name="Edit Photo" 
          component={EditPhoto}
        />
        <Stack.Screen 
          name="Edit Bio" 
          component={EditBio}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}