import * as React from 'react';
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Glucometer from "./screens/glucometer";
import Login from "./screens/login";
import { firebaseAuth } from "./firebase";
import { User, onAuthStateChanged } from 'firebase/auth';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    })
  }, [])
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen 
            name="Glucometer" 
            component={Glucometer} 
            options={{ headerShown: false }}/>
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
