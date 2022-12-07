import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native";

import ResultImc from "../ResultImc";

import styles from "./style";

export default function Form(){
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [errorMessageAltura, setErrorMessageAltura] = useState("");
  const [errorMessagePeso, setErrorMessagePeso] = useState("");

  function calculateImc() {
    return setImc((
      (weight.replace(",", ".") * 1) /
      ((height.replace(",", ".") * 1) * (height.replace(",", ".") * 1))
      ).toFixed(2));
  }

  function checkFields(){
    let check = true;
    // Campo vazio
    if (weight == "" || height == "") {
      height == "" ? setErrorMessageAltura("*Campo obrigatório"): setErrorMessageAltura("");
      weight == "" ? setErrorMessagePeso("*Campo obrigatório"): setErrorMessagePeso("");
      check = false;
    }
    
    // Número inválido
    if (isNaN(height.replace(",", ".")) || isNaN(weight.replace(",", "."))) {
      isNaN(height.replace(",", ".")) ? setErrorMessageAltura("*Número inválido"): setErrorMessageAltura("");
      isNaN(weight.replace(",", ".")) ? setErrorMessagePeso("*Número inválido"): setErrorMessagePeso("");
      check = false;
    }

    check ? null : Vibration.vibrate() ;
    return check;
  }

  function validationImc(){
    if (checkFields()) {
      calculateImc();
      setHeight("");
      setWeight("");
      setErrorMessageAltura("");
      setErrorMessagePeso("");
      setMessageImc("Seu imc é igual a...");
      setTextButton("Calcular novamente");
      return;
    }

    setImc("");
    setTextButton("Calcular IMC");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.formErrorMessage}>{errorMessageAltura}</Text>
        <TextInput
         style={styles.formInput}
         onChangeText={setHeight}
         value={height}
         placeholder="Ex. 1.75"
         keyboardType="numeric"
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.formErrorMessage}>{errorMessagePeso}</Text>
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