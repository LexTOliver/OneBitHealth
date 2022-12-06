import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import ResultImc from "../ResultImc";

export default  function Form(){
  
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
      setMessageImc("Seu imc é igual a ");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
         onChangeText={setHeight}
         value={height}
         placeholder="Ex. 1.75"
         keyboardType="numeric"
        ></TextInput>
        <Text>Peso</Text>
        <TextInput
         onChangeText={setWeight}
         value={weight}
         placeholder="Ex. 78.754"
         keyboardType="numeric"
        ></TextInput>
        <Button title={textButton} onPress={() => validationImc()}/>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>
    </View>
  );
}