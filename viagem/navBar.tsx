import { createStackNavigator } from '@react-navigation/stack';
import { Link, NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from "react-native"

export default function NavBar() {
    return(
        <>
        <Link to={'Home'} children={undefined}></Link>
        <Link to={''} children={undefined}></Link>
        <Link to={''} children={undefined}></Link>
        <Link to={''} children={undefined}></Link>
        <Link to={''} children={undefined}></Link>
        <Link to={''} children={undefined}></Link>
        </>
    )
}