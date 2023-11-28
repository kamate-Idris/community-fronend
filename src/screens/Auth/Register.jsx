import React, { useState } from 'react'
import { ScrollView, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import { cursorsColor, btnText, button, inputArea, inputField, mainContainer, mainTitle } from '../../utils/styles';


const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    age: 0,
    email: ''
  })
  const [isChecked, setIsChecked] = useState(false)
  const [showGenderMenu, setShowGenderMenu] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')




  
  const colors = {
    black: '#000',
    grey: 'grey'
  }
  const genders = [
    {
      id: 1,
      gender: "Masculin"
    },
    {
      id: 2,
      gender: "Feminin"
    }
  ]


  handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  handleShowMenu = () => {
    setShowGenderMenu(show => !show)
  }
  handleSelectedGender = (gender) => {
    setSelectedGender(gender)
    setShowGenderMenu(false)
  }

  handleShowPassword = () => {
    setShowPassword(password => !password)
  }






  return (
    <ScrollView style={mainContainer}>
      <Text style={mainTitle}>Créer un compte</Text>
      <View style={inputArea}  >
        <TextInput placeholderTextColor={colors.grey} cursorColor={cursorsColor} placeholder='Entrer votre nom' style={[inputField]} />
        <TextInput placeholderTextColor={colors.grey} cursorColor={cursorsColor} placeholder='Entrer votre prénom' style={[inputField]} />
        {/* Button to select gender */}
        <TouchableOpacity onPress={handleShowMenu} activeOpacity={1} cursorColor={cursorsColor} placeholder='Entrer votre genre' style={[inputField, styles.dropdown]} >
          <Text style={[styles.genderText, selectedGender && styles.genderSelected]}>{selectedGender ? selectedGender : "Selectionnez votre genre genre"}</Text>
          <AntDesign name="down" size={20} color="black" />
        </TouchableOpacity>

        {/* Show gender menu  */}
        {
          showGenderMenu && <View style={styles.genderMenu}>
            <FlatList
              data={genders}
              renderItem={({ item }) => (<Text onPress={() => handleSelectedGender(item.gender)} style={styles.gender}>{item.gender}</Text>)}
              keyExtractor={(item) => item.id}
            />
          </View>
        }

        <TextInput placeholderTextColor={colors.grey} keyboardType='numeric' cursorColor={cursorsColor} placeholder='Entrer votre age' style={inputField} />
        <TextInput placeholderTextColor={colors.grey} cursorColor={cursorsColor} placeholder='Entrer votre email' style={inputField} />
        <TextInput placeholderTextColor={colors.grey} secureTextEntry={showPassword} cursorColor={cursorsColor} placeholder='Entrer un mot de passe' style={inputField} />
        {/* Show password if eye clicked */}
        <View style={styles.eye}>
          {showPassword ?
            <Feather onPress={handleShowPassword} name="eye-off" size={24} color="black" /> :
            <Feather onPress={handleShowPassword} name="eye" size={24} color="black" />}
        </View>
        <TextInput placeholderTextColor={colors.grey} secureTextEntry cursorColor={cursorsColor} placeholder='Confirmer votre mot de passe' style={inputField} />

        {/* Conditons area */}
        <View style={styles.conditionsView}>
          <TouchableOpacity activeOpacity={1}
            onPress={handleCheckBox}
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}></TouchableOpacity>
          <Text style={styles.fontFifteen}>J'accepte les conditions d'utilisation</Text>
        </View>
      </View>

      {/* Register button */}
      <TouchableOpacity activeOpacity={1}
        disabled={!isChecked}
        onPress={() => console.log("hello")}
        style={[button, !isChecked && styles.disabledBtn]}>
        <Text style={btnText}>S'enregistrer</Text>
      </TouchableOpacity>

      {/* Link to login page */}
      <Text style={[styles.goLogin, styles.fontFifteen]}>Avez-vous un compte?
        <Text onPress={() => navigation.navigate('Login')} style={[styles.connexionText, styles.fontFifteen]}>connectez vous</Text>
      </Text>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({

 
  username: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },


  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  genderText: {
    color: 'grey',
    fontSize: 18
  },

  genderSelected: {
    color: '#000'
  },


  conditionsView: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#000',
    borderWidth: 1
  },
  checkboxChecked: {
    backgroundColor: 'royalblue',
    borderColor: 'transparent'
  },
  disabledBtn: {
    backgroundColor: "grey", // couleur de fond pour le bouton désactivé
    opacity: 0.6,
  },
  fontFifteen: {
    fontSize: 15
  },

  goLogin: {
    position: 'relative',
    justifyContent: 'space-between',
    bottom: 0,
    left: 0,
  },
  connexionText: {
    color: 'royalblue',

  },

  genderMenu: {
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: '#FFF',
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    top: 205,
    zIndex: 1
  },
  gender: {
    padding: 10,
    fontSize: 18,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1
  },
  eye: {
    position: 'absolute',
    right: 10,
    top: 405
  }



})
