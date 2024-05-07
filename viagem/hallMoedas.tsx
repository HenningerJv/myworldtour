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
import { FaHotel } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { Picker } from "@react-native-picker/picker";

export default function Home() {
    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('')
  
    return (
      <>
        <LinearGradient
          colors={['#00FF94', '#00FF94', '#2F829C']}
          style={styles.linearGradient}>
          <Text style={styles.text}>Bem-vindo, {nome}</Text>
          <Text style={styles.text}>Nacionalidade: {nacionalidade}</Text>
          <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.container2}>
            </View>
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
    },
    container2: {
      backgroundColor: '#00FF94',
      width: '40%'
    }
  });