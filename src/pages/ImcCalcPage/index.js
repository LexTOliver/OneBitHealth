import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Form from "../../components/Form";
import Title from "../../components/Title";

export default function ImcCalcPage(){
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