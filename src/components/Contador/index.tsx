import { View, Text, StyleSheet } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string,
    color: string
}

export function Contador({ name, color }: Props) {

    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: `${color}` }]} >{name}</Text>
            <Text style={styles.contador}>0</Text>
        </View>
    )
}