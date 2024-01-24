import { View, Text, StyleSheet } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string,
    color: string,
    position: string,
    quantidade: number
}

export function Contador({ name, color, quantidade, position }: Props) {

    const { left, right } = styles;
    
    const colors = (position === 'left' ? left : right);

    return (
        <View style={[styles.container, colors]}>
            <Text style={[styles.label, { color: `${color}`}]} >{name}</Text>
            <Text style={styles.contador}>{quantidade ?? 0}</Text>
        </View>
    )
}