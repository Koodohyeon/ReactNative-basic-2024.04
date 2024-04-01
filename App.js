import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';

const logo = { uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32,};
export default function App() {
  return (
    <ScrollView>
      <Image source={logo} />
      <PizzaTranslator />
      <State name='Run Tum Yugger' />
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Run Tum Yugger' num='2' />
      <Image source={logo} />
      <HelloWorld />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
