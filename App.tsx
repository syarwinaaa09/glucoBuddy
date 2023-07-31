<<<<<<< HEAD
import * as React from 'react';
=======
import { useState } from "react";
>>>>>>> 9ec8cffd9406548e1d2c5f8164af57192310b3a0
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Glucometer from "./screens/glucometer";
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
=======
import Login from "./screens/login";

const Stack = createStackNavigator();
>>>>>>> 9ec8cffd9406548e1d2c5f8164af57192310b3a0

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Glucometer" component={Glucometer} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen name="Glucometer" component={Glucometer} />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Glucometer />
      <StatusBar style="auto" />
    </View>
>>>>>>> 9ec8cffd9406548e1d2c5f8164af57192310b3a0
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

