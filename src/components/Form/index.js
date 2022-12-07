import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import ResultImc from "../ResultImc";

import styles from "./style";

export default function Form(){
  
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular IMC");

  function calculateImc() {
    return setImc((
      (weight.replace(",", ".") * 1) /
      ((height.replace(",", ".") * 1) * (height.replace(",", ".") * 1))
      ).toFixed(2));
  }

  function validationImc(){
    if (weight != null && height != null) {
      calculateImc();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual a...");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular IMC");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
         style={styles.formInput}
         onChangeText={setHeight}
         value={height}
         placeholder="Ex. 1.75"
         keyboardType="numeric"
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
         style={styles.formInput}
         onChangeText={setWeight}
         value={weight}
         placeholder="Ex. 78.754"
         keyboardType="numeric"
        ></TextInput>
        <TouchableOpacity
         style={styles.formButton} 
         onPress={() => validationImc()}
        >
          <Text style={styles.formTextButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}