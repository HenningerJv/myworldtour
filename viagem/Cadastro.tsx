import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('')
  const [endereco, setEndereco] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [genero, setGenero] = useState('')

  const cadastro = () => {
    alert(nome);
    alert(cpf);
    alert(email);
    alert(endereco);
    alert(senha)
    alert(confirmeSenha)
    alert(nacionalidade)
    alert(genero)
  }
  return (
    <LinearGradient
      colors={['#00FF94', '#00FF94', '#2F829C']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.text}>Abra uma conta</Text>
        <TextInput style={styles.textInput} placeholder="Informe o seu nome:" onChangeText={text => setNome(text)} />
        <TextInput style={styles.textInput} placeholder="Informe o seu CPF:" onChangeText={number => setCpf(number)} />
        <TextInput style={styles.textInput} placeholder="Informe o seu Email:" onChangeText={text => setEmail(text)} />
        <TextInput style={styles.textInput} placeholder="Informe o seu Endereço:" onChangeText={text => setEndereco(text)} />
        <Picker selectedValue={nacionalidade}
          onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
            setNacionalidade(itemValue)
          }>
          <Picker.Item label='Selecione sua Nacionalidade' value='' />
          <Picker.Item label='Africana' value='africana' />
          <Picker.Item label='Mexicana' value='mexicana' />
          <Picker.Item label='Inglesa' value='inglesa' />
          <Picker.Item label='Portuguesa' value='portuguesa' />
          <Picker.Item label='Brasileira' value='brasileira' />
          <Picker.Item label='Espanhola' value='espanhola' />
          <Picker.Item label='Italiana' value='italiana' />
          <Picker.Item label='Alemã' value='alema' />
          <Picker.Item label='Francesa' value='francesa' />
          <Picker.Item label='Australiana' value='australiana' />
          <Picker.Item label='Sueca' value='sueca' />
          <Picker.Item label='Argentina' value='argentina' />
          <Picker.Item label='Colombiana' value='colombiana' />
          <Picker.Item label='Canadense' value='canadense' />
          <Picker.Item label='Americana' value='americana' />
          <Picker.Item label='Holandesa' value='holandesa' />
          <Picker.Item label='Chilena' value='chilena' />
          <Picker.Item label='Venezuelana' value='venezuelana' />
          <Picker.Item label='Austriaca' value='austriaca' />
          <Picker.Item label='Chinesa' value='chinesa' />
          <Picker.Item label='Japonesa' value='japosena' />
          <Picker.Item label='Coreana' value='Coreana' />
          <Picker.Item label='Russa' value='russa' />
        </Picker>
        <Picker selectedValue={genero}
          onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
            setGenero(itemValue)
          }>
          <Picker.Item label='Selecione seu Gênero' value='' />
          <Picker.Item label='Masculino' value='masculino' />
          <Picker.Item label='Feminino' value='feminino' />
          <Picker.Item label='Outro' value='outro' />
        </Picker>
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Crie sua senha:" onChangeText={text => setSenha(text)} />
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Confirme sua senha:" onChangeText={text => setConfirmeSenha(text)} />
        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
          <Text style={styles.btnCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 8,
    height: 7,
    marginLeft: 55,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 7,
    paddingTop: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 40,
    marginBottom: 70,
    fontWeight: '500',
    color: 'black',
  },
  btnCadastro: {
    backgroundColor: '#00FF94',
    color: 'black',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
    alignContent: 'center',
    width: '60%',
    textAlign: 'center'
  },
  textInput: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: 'transparent',
    shadowColor: 'black',
    marginBottom: 10,
    paddingLeft: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});

function alert(confirmeSenha: string) {
  throw new Error("Function not implemented.");
}
