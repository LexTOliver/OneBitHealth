import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";

import styles from "./style";

export default function ResultImc(props){
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    });
  }

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultInfo}>{props.messageResultImc}</Text>
      <Text style={styles.resultNumber}>{props.resultImc}</Text>
      <TouchableOpacity
          style={styles.shareButton} 
          onPress={onShare}
          >
            <Text style={styles.shareTextButton}>Share</Text>
          </TouchableOpacity>
    </View>
  );
}