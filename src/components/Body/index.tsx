import { View, Text, FlatList } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

import { Painel } from "../Painel"
import { ListaVazia } from "../ListaVazia";

export function Body() {
    const [tarefas, setTarefas] = useState<string[]>([]);

    return (
        <View style={styles.container}>
            <Painel/>
            <FlatList
                data={tarefas}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Text>s</Text>
                )}

                ListEmptyComponent={() => (
                    <ListaVazia/>
                )}
            />
        </View>
    )
}