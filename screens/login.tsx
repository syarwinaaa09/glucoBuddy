import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { firebaseAuth } from "../firebase";
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("welcome");
    }
    catch(error: any) {
      console.log(error);
      alert('Sign in failed' + error.message)
    }
    finally {
      setLoading(false);
    }
  }
    return (
      <View>
        <Text style={styles.title}>Login</Text>
        <View>
            <Text style={styles.text}>Email:</Text>
            <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}></TextInput>
            <Text style={styles.text}>Password:</Text>
            <TextInput 
            style={styles.input} 
            value={password}
            onChangeText={setPassword}
            secureTextEntry></TextInput>
            <Pressable style={styles.button} onPress={signIn}>
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