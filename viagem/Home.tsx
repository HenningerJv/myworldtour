import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { LiaHomeSolid } from "react-icons/lia";
import { TbTicket } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdHotel } from "react-icons/md";
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('')
  const [user, setUser] = useState('');

  useEffect(() => {
    if (user) {
      setNome(user.nome);
      setNacionalidade(user.nacionalidade);
    }
  }, [user]);

  return (
    <>
      <LinearGradient
        colors={['#00FF94', '#00FF94', '#2F829C']}
        style={styles.linearGradient}>
        <Text style={styles.text}>Bem-vindo, {user.nome}</Text>
        <Text style={styles.text}>Nacionalidade: {user.nacionalidade}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <LiaHomeSolid name="home-outline" size={30} color="black" />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <TbTicket name="home-outline" size={30} color="black" />
            <Text>Passagens</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <MdHotel name="home-outline" size={30} color="black" />
            <Text>Reservas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <FaSuitcase name="home-outline" size={30} color="black" />
            <Text>Viagens</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HallMoedas')}>
            <LiaCoinsSolid name="home-outline" size={30} color="black" />
            <Text>Conversor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <IoSettingsOutline name="settings-outline" size={30} color="black" />
            <Text>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <CiLogout name="log-out-outline" size={30} color="black" />
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
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
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
