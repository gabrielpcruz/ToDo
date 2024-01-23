import { View } from "react-native"

import { styles } from "./styles"

import { ContadorTarefa } from "../ContadorTarefa"

export function Painel() {
    return (
        <View style={styles.container}>
            <ContadorTarefa name="Criadas" />
            <ContadorTarefa name="Concluídas" />
        </View>
    )
}