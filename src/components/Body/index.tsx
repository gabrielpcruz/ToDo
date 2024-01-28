import { View, Text, FlatList } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

import { Painel } from "../Painel"
import { ListaVazia } from "../ListaVazia";
import { Tarefa } from "../Tarefa";

export function Body() {
    const [tarefas, setTarefas] = useState<string[]>(['sd']);

    function taferasConcluidas () {
        return 5;
    }

    return (
        <View style={styles.container}>
            <Painel
                criadas={tarefas.length}
                concluidas={taferasConcluidas()}
            />

            <FlatList
                style={styles.list}
                data={tarefas}
                
                keyExtractor={item => item}

                renderItem={({ item }) => (
                    <Tarefa />
                )}

                ListEmptyComponent={() => (
                    <ListaVazia/>
                )}
            />
        </View>
    )
}