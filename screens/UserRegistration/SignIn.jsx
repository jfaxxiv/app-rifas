import React from 'react'
import {View,Text,TextInput,Button, StyleSheet} from 'react-native'
import { app } from '../../firebase/config'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app)

function SignIn(props) {
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [warning, setWarning] = React.useState('')

    const defEmail = (text) => {
        setEmail(text)
    }
    const defPassword = (text) => {
        setPassword(text)
    }
    const defConfirmPassword = (text) => {
        setConfirmPassword(text)
    }

    const register = () => {
        if(password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                props.navigation.navigate('Home')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        }else{
            setWarning('Las contraseñas no coinciden')
        }
    }
  return (
     <View style={styles.container}>
        <Text style={styles.label}>Correo Electrónico</Text>
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
            secureTextEntry={true}
        />
        <Text style={styles.label}>Confirma Contraseña</Text>
        <TextInput 
            style={styles.input}
            placeholder='confirmar contraseña'
            onChangeText={defConfirmPassword}
            value={confirmPassword}    
            secureTextEntry={true}
        />
        <Button 
            title='Registrar'
            onPress={register}
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



export {SignIn}


{/* <Text>Nombre de Usuario</Text>
        <TextInput 
            placeholder='nombre'
            onChangeText={defUser}
            value={user}
        />
        
        <Text>Correo Electronico</Text>
        <TextInput 
            placeholder='correo'
            onChangeText={defEmail}
            value={email}
        />
        <Text>Contraseña</Text>
        <TextInput 
            placeholder='contraseña'
            onChangeText={defPassword}
            value={password}
        />
        <Text>Confirma Contraseña</Text>
        <TextInput 
            placeholder='contraseña'
            onChangeText={defConfirmPassword}
            value={confirmPassword}    
        />
        <Button 
            title='Registrar'
        /> */}