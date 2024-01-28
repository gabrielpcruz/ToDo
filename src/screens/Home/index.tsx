import { View, FlatList } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

import { Head } from "../../components/Head"
import { Input } from "../../components/Input"
import { Painel } from "../../components/Painel";
import { Task } from "../../components/Task";
import { ListaVazia } from "../../components/ListaVazia";

type Task = {
    isDone: () => boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function taferasConcluidas() {
        return 0;
    }

    function handleTaskAdd(task: Task) {
        console.log(task);

        setTasks(prevState => [...prevState, task]);
    }

    function handleTaskRemove(task: number) {
        console.log(task);

        setTasks(prevState => prevState.filter((taskItem, index) => task !== index))
    }

    return (
        <View style={styles.container}>
            <Head />

            <Input
                taskAdd={handleTaskAdd}
            />

            <View style={styles.bodyContainer}>
                <Painel
                    criadas={tasks.length}
                    concluidas={taferasConcluidas()}
                />

                <FlatList
                    style={styles.list}

                    showsVerticalScrollIndicator={false}

                    data={tasks}

                    keyExtractor={(item, index) => 'key' + index}

                    renderItem={({ item, index }) => (
                        <Task
                            taskText={item}
                            onRemove={() => { handleTaskRemove(index) }}
                        />
                    )}

                    ListEmptyComponent={() => (
                        <ListaVazia />
                    )}
                />
            </View>
        </View>
    )
}