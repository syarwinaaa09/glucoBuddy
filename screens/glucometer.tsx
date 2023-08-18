import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { db, ref, onValue } from "../firebase";
import background from "../assets/background1.png";

const Glucometer = () => {
  const [voltage, setVoltage] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = ref(db, "Sensor");

    onValue(data, (snapshot) => {
      const voltageValue = snapshot.val().voltage;
      setVoltage(parseFloat(voltageValue));

      // Determine the message based on the voltage value
      if (voltageValue < 40) {
        setMessage("Normal");
      } else if (voltageValue < 800) {
        setMessage("Please uncover the sensor");
      } else if (voltageValue < 2000) {
        setMessage("Possible diabetic");
      } else if (voltageValue < 3200) {
        setMessage("Normal");
      } else {
        setMessage("Please put finger on the sensor");
      }
    });
  }, [db]);

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.voltage}>
            <Text style={styles.dataText}>{voltage}</Text>
            <Text style={styles.title}>Voltage</Text>
          </View>
        </View>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </ImageBackground>
  );
};

export default Glucometer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
    paddingRight: 35,
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  spacer: {
    height: "30%",
  },
  dataWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  voltage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 40,
    fontWeight: "200",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  messageText: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});
