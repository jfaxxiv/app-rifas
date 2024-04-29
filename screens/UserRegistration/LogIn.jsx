import React from 'react'
import {View,Text,TextInput,Button,StyleSheet,TouchableOpacity} from 'react-native'
import { app } from '../../firebase/config'
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";

const auth = getAuth(app)
function LogIn(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [warning, setWarning] = React.useState('')

    const defEmail = (text) => {
        setEmail(text)
    }
    const defPassword = (text) => {
        setPassword(text)
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                props.navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setWarning('No se encontro el Usuario')
            });
    }

    const screenUpdatePassword = () => {
      props.navigation.navigate('UpdatePassword')
    }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Correo Electronico</Text>
        <TextInput 
            style={styles.input}
            placeholder='correo'
            onChangeText={defEmail}
            value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
            style={styles.input}
            placeholder='contraseña'
            onChangeText={defPassword}
            value={password}
        />
        <TouchableOpacity
          onPress={screenUpdatePassword}
        >
          <Text>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <Button 
            title='Iniciar Sesion'
            onPress={login}
        />

        <Text style={styles.warning}>{warning}</Text>
  </View> 
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    warning: {
      color: 'red',
      marginTop: 10,
    },
  });

export {LogIn}