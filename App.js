import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import BoardingPass from './BoardingPass';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePictue from './assets/profilepicture.png';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{headerStyle: {
            backgroundColor: '#425C5A'
          },
          headerTintColor: '#A0B9B7',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}} />
        <Stack.Screen name="Boarding pass" component={BoardingPass} options={{title: 'Boarding pass'}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={ProfilePictue}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#425C5A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  }
});
