import React from 'react'
import {View,Button} from 'react-native'


function Main(props) {

  return (
    <View>
        <Button 
            title='Registrate'
            onPress={() => {
                props.navigation.navigate('SignIn')
            }}
        />
        <Button 
            title='Inicia Sesion'
            onPress={() => {
                props.navigation.navigate('LogIn')
            }}
        />
    </View>
  )
}

export  {Main}