import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";

import styles from "./style";

export default function MyInputText(props){
  return (
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <Text style={styles.inputLabel}>{props.title}</Text>
      <Text style={styles.inputErrorMessage}>{props.errorMessage}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={props.setInputValue}
        value={value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      ></TextInput>
    </View>
  );
}

{
  // <MyInputText
  //  title="Altura"
  //  errorMessage={errorMessageAltura}
  //  setInputValue={setHeight}
  //  value={height}
  //  placeholder="Ex. 1.75"
  //  keyboardType="numeric"
  // />
}