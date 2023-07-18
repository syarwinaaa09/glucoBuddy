import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';
import { useState } from 'react';
import useHealthData from './src/hooks/useHealthData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
function HomeScreen({navigation}: {navigation: any}) {
  const [date, setDate] = useState(new Date());
  const { steps, flights, distance } = useHealthData(date);

  const changeDate = (numDays: number) => {
    const currentDate = new Date(date); // Create a copy of the current date
    // Update the date by adding/subtracting the number of days
    currentDate.setDate(currentDate.getDate() + numDays);

    setDate(currentDate); // Update the state variable
  };

  return (
    <View style={styles.container}>
      <RingProgress progress={0.56} />

      <View style={styles.values}>
        <Value label="Steps" value={steps.toString()} />
        <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`} />
        <Value label="Flights Climbed" value={flights.toString()} />
      </View>
      <Button title = "Login" onPress={navigation.navigate("Login")} />
      <StatusBar style="auto" />
    </View>
  );
}
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});
