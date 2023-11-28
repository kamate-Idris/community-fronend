import React from 'react'
import { Text, View } from 'react-native'

const ValideInput = ({inputName}) => {
  return (
    <Text style={{color: 'red',marginTop : -30, fontSize : 12, marginLeft : 15}}>Le champ {inputName} est obligatoire</Text>
  )
}

export default ValideInput




