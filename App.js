import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [gasolinaBol, setGasolinaBol] = useState(false)
  const [etanolBol, setEtanolBol] = useState(false)

  const handleSubmit = () => {
    let porcentagem = (70 / 100) * gasolina

    if (etanol === 0 || gasolina === 0) {
      alert('Preencha os campos.')
    } else {
      if (etanol <= porcentagem) {
        setEtanolBol(true)
        setGasolinaBol(false)
      } 
      if (etanol >= porcentagem) {
        setGasolinaBol(true)
        setEtanolBol(false)
      }
    }


  }

  return (
    <View style={styles.container}>
      <View style={{borderBottomWidth: 1,borderRightWidth: 1,borderLeftWidth: 1,borderTopWidth: 1,width: '90%',height: '50%',padding: 20}}>
        <Text style={{marginBottom: 10}}>Preço Gasolina</Text>
        <View style={{borderBottomWidth: 1,borderRightWidth: 1,borderLeftWidth: 1,borderTopWidth: 1,padding: 5,}}>
          <TextInput
            placeholder="Preço Gasolina"
            keyboardType="number-pad"
            onChangeText={setGasolina}
          />
        </View>
        <View style={{margin: 20}}></View>
        <Text
          style={{
            marginBottom: 10
          }}
        >Preço Etanol</Text>
        <View style={{borderBottomWidth: 1,borderRightWidth: 1,borderLeftWidth: 1,borderTopWidth: 1,padding: 5}}>
          <TextInput
            placeholder="Preço Etanol"
            keyboardType="number-pad"
            onChangeText={setEtanol}
            onSubmitEditing={handleSubmit}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button 
            onPress={handleSubmit}
            title="Calcular"
          ></Button>
        </View>
      </View>
      {gasolinaBol && <View style={{ backgroundColor: 'yellow', width: '90%', marginTop: 20, alignItems:"center"}}>
        <Text style={{ fontSize: 26, padding: 10 }}>Abasteça com Gasolina!</Text>
      </View>}

      {etanolBol && <View style={{ backgroundColor: 'green', width: '90%', marginTop: 20, alignItems:"center"}}>
        <Text style={{ fontSize: 26, padding: 10 }}>Abasteça com Etanol!</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
