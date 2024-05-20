import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity, Button, Alert } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from "./Cadastro";
import navigation from "./navigation";
import { useNavigation } from '@react-navigation/native';
import Home from "./Home";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { auth, db } from "./fireBaseConfirg";


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;
      const userDoc = await getDoc(doc(db, 'Usuario', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser(userData);
        setNome(userData.nome);
        setNacionalidade(userData.nacionalidade);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <LinearGradient
      colors={['#00FF94', '#00FF94', '#2F829C']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.text}>Bem-vindo</Text>
        <TextInput style={styles.textInput} placeholder="Informe o seu Email:" onChangeText={text => setEmail(text)} value="email" />
        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Crie sua senha:" onChangeText={text => setSenha(text)} value="senha" />
        <TouchableOpacity style={styles.btnCadastro} onPress={() => Home()}>
          <Text style={styles.btnCadastro} onPress={handleLogin}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Cadastro}>
          <Text style={styles.linkText}>Não tem Conta?</Text>
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
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
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
function signInWithEmailAndPassword(auth: any, email: string, senha: string) {
  throw new Error("Function not implemented.");
}

function setUser(userData: DocumentData) {
  throw new Error("Function not implemented.");
}

function setNome(nome: any) {
  throw new Error("Function not implemented.");
}

function setNacionalidade(nacionalidade: any) {
  throw new Error("Function not implemented.");
}

