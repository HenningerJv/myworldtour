import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    alert(email);
    alert(senha)
  }
  return (
    <LinearGradient
      colors={['#00FF94', '#00FF94', '#2F829C']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.text}>Bem-vindo</Text>
        <TextInput style={styles.textInput} placeholder="Informe o seu Email:" onChangeText={text => setEmail(text)} />
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Crie sua senha:" onChangeText={text => setSenha(text)} />
        <TouchableOpacity style={styles.btnCadastro} onPress={() => login()}>
          <Text style={styles.btnCadastro}>Entrar</Text>
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
    height: 3,
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

function alert(senha: string) {
  throw new Error("Function not implemented.");
}
