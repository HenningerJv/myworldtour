import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Picker } from "@react-native-picker/picker";


export default function ConfirmeCompra() {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('')
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [tipoPagamento, setTipoPagamento] = useState('');

  const confirmar = () => {
    alert(email);
    alert(nome)
    alert(cvv);
    alert(cpf)
    alert(endereco);
    alert(numeroCartao)
  }

  return (
    <>
      <LinearGradient
        colors={['#00FF94', '#00FF94', '#2F829C']}
        style={styles.linearGradient}>
        <Text style={styles.text}>Bem-vindo, {nome}</Text>
        <Text style={styles.text}>Nacionalidade: {nacionalidade}</Text>
        <View style={styles.container}>
          <StatusBar hidden />
          <Text style={styles.text}>Bem-vindo</Text>
          <TextInput style={styles.textInput} placeholder="Informe o seu Email:" onChangeText={text => setEmail(text)} />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Informe o endereço da cobrança:" onChangeText={text => setEndereco(text)} />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Digite o número do Cartão:" onChangeText={text => setNumeroCartao(text)} />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Informe o CPF do Titular:" onChangeText={text => setCpf(text)} />
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Informe o CVV:" onChangeText={text => setCvv(text)} />
          <Picker selectedValue={tipoPagamento}
            onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
              setTipoPagamento(itemValue)
            }>
            <Picker.Item label='Selecione o tipo de Pagamento' value='' />
            <Picker.Item label='Débito' value='debito' />
            <Picker.Item label='Crédito' value='credito' />
          </Picker>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Nome do Titular do Cartão:" onChangeText={text => setNome(text)} />
          <TouchableOpacity style={styles.btnCadastro} onPress={() => confirmar()}>
            <Text style={styles.btnCadastro}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: 7,
    justifyContent: 'center',
    display: 'flex',
    padding: 6,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 7,
    paddingTop: 1,
    marginLeft: 19
  },
  text: {
    fontSize: 40,
    marginBottom: 70,
    fontWeight: '500',
    color: 'black',
    marginLeft: 60
  },
  btnCadastro: {
    backgroundColor: '#00FF94',
    color: 'black',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
    alignContent: 'center',
    width: '60%'
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

function alert(email: string) {
  throw new Error("Function not implemented.");
}
