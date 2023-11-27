import { StatusBar, StyleSheet, Text, View,ScrollView } from 'react-native';
import Register from './src/screens/Auth/Register';
import { NativeScreenNavigationContainer } from 'react-native-screens';











export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Register />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : StatusBar.currentHeight
    
    
  },
});
