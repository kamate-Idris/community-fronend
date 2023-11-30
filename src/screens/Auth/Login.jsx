import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { btnText, button, cursorsColor, inputArea, inputField, mainContainer, mainTitle } from '../../utils/styles'
import ValideInput from '../../../components/Erros/ValideInput'

const Login = () => {
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })
  const [errors, setErrors] = useState(false)

  const handleAuthentication = () => {
    if (credentials.login === '' || credentials.password === '') {
      setErrors(true)
      return
    }
    /* TODO : Call the API for authentication */
  }


  return (
    <View style={mainContainer}>
      <Text style={mainTitle}>Connectez-vous</Text>
      {/* Inputs view area */}
      <View style={inputArea}>
        <TextInput
          onChangeText={(e) => setCredentials({ ...credentials, login: e })}
          cursorColor={cursorsColor} placeholder='Entrer votre login (email)' style={inputField} />
        {errors && !credentials.login && <ValideInput inputName={'login'} />}
        <TextInput
          onChangeText={(e) => setCredentials({ ...credentials, password: e })}
          cursorColor={cursorsColor} secureTextEntry placeholder='Entrer votre mot de passe ' style={inputField} />
        {errors && !credentials.password && <ValideInput inputName={'mot de passe'} />}
        <TouchableOpacity onPress={handleAuthentication} style={[button, styles.resizeBtn]}>
          <Text style={btnText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  resizeBtn: {
    marginTop: 0
  }
})
