import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('')
  const [endereco, setEndereco] = useState('')

  const cadastro = () => {
    alert(nome);
    alert(cpf);
    alert(email);
    alert(endereco);
    alert(senha)
    alert(confirmeSenha)
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
