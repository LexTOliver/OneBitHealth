import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";

import styles from "./style";

export default function MyInputText(props){
  return (
    <View style={{alignSelf: 'stretch'}}>
      <Text style={styles.inputLabel}>{props.title}</Text>
      <Text style={styles.inputErrorMessage}>{props.errorMessage}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={props.setInputValue}
        value={props.inputValue}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      ></TextInput>
    </View>
  );
}