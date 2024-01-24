import { View } from "react-native"

import { styles } from "./styles"

import { Contador } from "../Contador"

type Props = {
    criadas: number,
    concluidas: number,
}

export function Painel({ criadas, concluidas }: Props) {
    return (
        <View style={styles.container}>
            <Contador
                name="Criadas"
                quantidade={criadas}
                color="#4EA8DE" 
                position="left"
            />

            <Contador
                name="Concluídas"
                quantidade={concluidas}
                position="right"
                color="#8284FA"
            />
        </View>
    )
}