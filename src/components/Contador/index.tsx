import { View, Text } from "react-native"

import { styles } from "./styles"
import { Fragment } from "react"


export function Contador() {
    return (
        <View style={styles.container}>

            <Fragment>
                <Text style={styles.contador}>Criadas</Text>
                <Text style={styles.contador}>Concluídas</Text>
            </Fragment>
        </View>
    )
}