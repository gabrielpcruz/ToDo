import { View, Text } from "react-native"

import { styles } from "./styles"


export function Tarefa() {
    return (
        <View style={styles.container}>
            <Text style={styles.bolinha}>bolinha</Text>
            <Text style={styles.texto}>Texto</Text>
            <Text style={styles.lixiera}>Lixeira</Text>
        </View>
    )
}