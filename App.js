import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Title from './src/components/Title';
import Form from './src/components/Form';



export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style='auto'/>
        <Title value="ONEBITHEALTH!" />
        <Form />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EAE9',
  },
});
