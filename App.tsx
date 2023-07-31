import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Glucometer from "./screens/glucometer";

export default function App() {
  return (
    <View style={styles.container}>
      <Glucometer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
