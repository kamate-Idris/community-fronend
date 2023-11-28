import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import Register from './src/screens/Auth/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Auth/Login';



const stack = createNativeStackNavigator()

function RegisterScreen({navigation})
{
  return (
    <ScrollView style={styles.container}>
        <Register navigation={navigation} />
      </ScrollView> 
  )
}


export default function App() {
  return (
    
      <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{headerShown :  false}} name='Register' component={RegisterScreen}
         />
         <stack.Screen options={{headerShown : false}} name='Login' component={Login} />
      </stack.Navigator>
      
    </NavigationContainer>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight


  },
});
