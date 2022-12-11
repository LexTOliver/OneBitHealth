import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  ScrollView
} from "react-native";

import ResultImc from "../ResultImc";
import MyInputText from "../MyInputText";

import styles from "./style";

export default function Form(){
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [errorMessageAltura, setErrorMessageAltura] = useState("");
  const [errorMessagePeso, setErrorMessagePeso] = useState("");
  const [imcList, setImcList] = useState([]);

  function calculateImc() {
    let valueImc = (
      weight.replace(",", ".") /
      (height.replace(",", ".") * height.replace(",", "."))
    ).toFixed(2); 
    setImc(valueImc);

    setImcList((arr) => [...arr, {
      id: new Date().getTime(),
      height: height,
      weight: weight,
      imc: valueImc,
    }]);
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
    } else {
      setImc("");
      setTextButton("Calcular IMC");
      setMessageImc("Preencha o peso e a altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == "" ?
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <MyInputText
            title="Altura"
            errorMessage={errorMessageAltura}
            setInputValue={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <MyInputText
            title="Peso"
            errorMessage={errorMessagePeso}
            setInputValue={setWeight}
            value={weight}
            placeholder="Ex. 79.845"
            keyboardType="numeric"
          />
          <TouchableOpacity
          style={styles.formButton} 
          onPress={() => validationImc()}
          >
            <Text style={styles.formTextButton}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable> :
        <View style={styles.exhibitResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc}/>
          <TouchableOpacity
          style={styles.formButton} 
          onPress={() => validationImc()}
          >
            <Text style={styles.formTextButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
       style = {styles.listImcContainer}
       showsVerticalScrollIndicator = {false}
       data = {imcList.reverse()}
       renderItem = {({item}) => {
         return (
           <View style = {styles.listImcItem}>
            <Text style = {styles.listImcText}>Altura: {item.height}</Text>
            <Text style = {styles.listImcText}>Peso: {item.weight}</Text>
            <Text style = {styles.listImcText}>IMC: {item.imc}</Text>
          </View>
        );
      }}
      keyExtractor = {item => item.id}
      />
    </View>
  );
}