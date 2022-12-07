import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

export default function ResultImc(props){
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultInfo}>{props.messageResultImc}</Text>
      <Text style={styles.resultNumber}>{props.resultImc}</Text>
    </View>
  );
}