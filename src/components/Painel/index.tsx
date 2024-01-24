import { View } from "react-native"

import { styles } from "./styles"

import { Contador } from "../Contador"

export function Painel() {
    return (
        <View style={styles.container}>
            <Contador name="Criadas" color="#4EA8DE" />
            <Contador name="Concluídas" color="#8284FA" />
        </View>
    )
}