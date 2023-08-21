import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { firebaseAuth } from '../firebase';

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
      alert('Welcome');
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={signIn}>
          <Text style={styles.buttontext}>Login</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    marginHorizontal: 5,
  },
  input: {
    backgroundColor: 'rgb(200,200,200)',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: 'black',
    padding: 10,
  },
  buttontext: {
    color: 'white',
  },
});
