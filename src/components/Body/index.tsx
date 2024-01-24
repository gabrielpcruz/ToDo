import { View, Text, FlatList } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

import { Painel } from "../Painel"
import { ListaVazia } from "../ListaVazia";

export function Body() {
    const [tarefas, setTarefas] = useState<string[]>([]);

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