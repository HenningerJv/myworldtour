import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Home from "./Home";

export default function ConversorMoeda() {
    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('')
    const [tipoMoeda, setTipoMoeda] = useState('')
    const [numeroConta, setNumeroConta] = useState('')


    return (
        <>
            <LinearGradient
                colors={['#00FF94', '#00FF94', '#2F829C']}
                style={styles.linearGradient}>
                <Text style={styles.text}>Bem-vindo, {nome}</Text>
                <Text style={styles.text}>Nacionalidade: {nacionalidade}</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>Converte Sua Moeda</Text>
                    <Picker selectedValue={tipoMoeda}
                        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
                            setTipoMoeda(itemValue)
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
                    <Picker selectedValue={tipoMoeda}
                        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) =>
                            setTipoMoeda(itemValue)
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

    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
});