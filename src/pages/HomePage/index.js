import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Title from "../../components/Title";

export default function HomePage(){
  return (
    <View style={styles.container}>
      <Title value="Bem vindo ao ONEBITHEALTH!"/>
      <StatusBar style='auto' backgroundColor='#FF0043'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F3EAE9',
  },
});