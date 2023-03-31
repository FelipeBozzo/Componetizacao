import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "./src/estilo/components/header";
import Form from "./src/estilo/components/form";
import Login from "./src/estilo/components/login";


export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>

      <Form></Form>
       
      <Login></Login>
      
    </View>
  );
}

