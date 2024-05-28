import { Picker } from "@react-native-picker/picker";
import LinearGradient from "react-native-linear-gradient";
import Home from "./Home";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { LiaHomeSolid } from "react-icons/lia";
import { TbTicket } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdHotel } from "react-icons/md";
import navigation from "./navigation";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./types";

export default function ConversorMoeda() {
    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('')
    const [moedaOrigem, setMoedaOrigem] = useState('');
    const [moedaDestino, setMoedaDestino] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [numeroConta, setNumeroConta] = useState('')
    const [user, setUser] = useState('');

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
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
                        <LiaCoinsSolid name="hallMoedas-outline" size={30} color="black" />
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
                    <Text style={styles.text}>Converte Sua Moeda</Text>
                    <Picker selectedValue={moedaOrigem}
                        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
                            setMoedaOrigem(itemValue)
                        }>
                        <Picker.Item label='Selecione a Moeda que será convertida' value='' />
                        <Picker.Item label='Real Brasileiro' value='realBrasileiro' />
                        <Picker.Item label='Euro' value='euro' />
                        <Picker.Item label='Dolar Canadense' value='dolarCanadense' />
                        <Picker.Item label='Dolar Americano' value='dolarAmericano' />
                        <Picker.Item label='Libra Esterlina' value='libraEsterlina' />
                        <Picker.Item label='Iene Japonês' value='ieneJapones' />
                    </Picker>
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Quanto quer converter" onChangeText={text => setTipoMoeda(text)} />
                    <Picker selectedValue={moedaDestino}
                        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
                            setMoedaDestino(itemValue)
                        }>
                        <Picker.Item label='Selecione a Moeda Convertedora' value='' />
                        <Picker.Item label='Real Brasileiro' value='realBrasileiro' />
                        <Picker.Item label='Euro' value='euro' />
                        <Picker.Item label='Dolar Canadense' value='dolarCanadense' />
                        <Picker.Item label='Dolar Americano' value='dolarAmericano' />
                        <Picker.Item label='Libra Esterlina' value='libraEsterlina' />
                        <Picker.Item label='Iene Japonês' value='ieneJapones' />
                    </Picker>
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Total" onChangeText={text => setTipoMoeda(text)} />
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Quanto está hoje" onChangeText={text => setTipoMoeda(text)} />
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Informe o número da conta" onChangeText={text => setNumeroConta(text)} />
                    <TouchableOpacity onPress={Home}>
                        <Text style={styles.linkText}>Converter</Text>
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
