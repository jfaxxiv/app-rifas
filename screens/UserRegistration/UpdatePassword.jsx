import React from 'react'
import { View,Text,Button,TextInput,StyleSheet } from 'react-native'
import { app } from '../../firebase/config'
import { getAuth,sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(app)

function UpdatePassword(props) {

    const [email,setEmail] = React.useState('')
    const defEmail = (text) => {
        setEmail(text)
    }

    const emailUpdatePassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            props.navigation.navigate('LogIn')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

  return (
    <View>

        <Text style={styles.label}>Ingresa el correo con el que te registraste</Text>
        <TextInput 
            style={styles.input}
            placeholder='correo'
            onChangeText={defEmail}
            value={email}
        />
        <Button 
            title='Enviar'
            onPress={emailUpdatePassword}
        />
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

export {UpdatePassword}