import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  const onPressHandler = () => {}
    return (
      <View>
        <Text style={styles.title}>Login</Text>
        <View>
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.text}>Password:</Text>
            <TextInput style={styles.input} secureTextEntry></TextInput>
            <Pressable style={styles.button} onPress={onPressHandler}>
              <Text style={styles.buttontext}>
                Login
              </Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
const styles = StyleSheet.create({
  title:{
    fontSize:50,
    textAlign:'center'
  },
  text:{
    marginHorizontal:5
  },
  input:{
    backgroundColor:'rgb(200,200,200)',
    margin:5
  },
  button:{
    marginHorizontal:5,
    marginVertical:10,
    textAlign:'center',
    borderRadius:4,
    backgroundColor:'black',
    padding:5
  },
  buttontext:{
    color:'white'
  }
})
