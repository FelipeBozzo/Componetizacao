import {View, Text} from "react-native";
import styles from "../estilo"

export default function login() {
    return (
        <View style= {{flexDirection:'row', marginTop:30}}>
            <Text style= {styles.textLink}>  Esqueceu sua senha ? </Text>
            <Text style= {styles.textLink}>  Cadastra-se já !     </Text>
        </View>
    )
}