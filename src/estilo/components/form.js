import { LinearGradient } from "expo-linear-gradient";
//import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "../estilo";

export default function Form() {
    return (
        <View
        // Button Linear Gradient
        style={styles.box}>

            <TextInput style={styles.inputs} placeholder= 'e-mail' />
        
            <TextInput style={styles.inputs} placeholder= 'senha' />

                <TouchableOpacity style={{width:'80%'}}> 
                    <LinearGradient colors={['#D2691E','#FF4500']} style={styles.button}>
                        <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
        </View>
    )
}