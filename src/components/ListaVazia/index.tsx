import { View, Text, Image } from "react-native"

import { styles } from "./styles"


export function ListaVazia() {
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('./../../../assets/img/clipboard.png')}
            />

            <Text style={styles.textoPrincipal}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.textoSecundario}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}