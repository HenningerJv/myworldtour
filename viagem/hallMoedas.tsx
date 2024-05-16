import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LiaHomeSolid } from "react-icons/lia";
import { TbTicket } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdHotel } from "react-icons/md";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["USD", "EUR", "GBP", "JPY", "AUD"],
  datasets: [
    {
      data: [1.0, 0.84, 0.74, 110.57, 1.34],
    },
  ],
};

export default function HallMoedas() {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const navigation = useNavigation();

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
            <LineChart
              data={data}
              width={screenWidth * 0.9}
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
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
        </View>
      </LinearGradient>
    </>
  );
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
