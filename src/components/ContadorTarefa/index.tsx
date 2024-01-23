import { View, Text } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string
}

export function ContadorTarefa({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.contador}>0</Text>
        </View>
    )
}