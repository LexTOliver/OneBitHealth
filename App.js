import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Title from './src/components/Title';
import Form from './src/components/Form';



export default function App() {
  return (
      <View style={styles.container}>
        <Title value="ONEBITHEALTH!" />
        <Form />
        <StatusBar style='auto' backgroundColor='#FF0043'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EAE9',
  },
});
