import { View, FlatList } from "react-native"
import { useState } from "react";
import { TaskInterface, Task } from "../../classes/Task";

import { styles } from "./styles"

import { Head } from "../../components/Head"
import { Input } from "../../components/Input"
import { Painel } from "../../components/Painel";
import { TaskComponent } from "../../components/Task";
import { ListaVazia } from "../../components/ListaVazia";

export function Home() {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [tasksConcluidas, setTasksConcluidas] = useState(0);

    function handleAllTasksDone() {
        let concluidas = 0;        
        
        tasks.map((task) => {
            if (task.isDone()) {
                concluidas += 1;
            }
        });

        setTasksConcluidas(concluidas);
    }

    function handleTaskAdd(taskDescription: string) {
        const task = new Task(taskDescription);

        setTasks(prevState => [...prevState, task]);
        handleAllTasksDone();
    }

    function handleTaskRemove(task: number) {

        handleAllTasksDone();
        
        setTasks(prevState => prevState.filter((taskItem, index) => task !== index));
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
                    concluidas={tasksConcluidas}
                />

                <FlatList
                    style={styles.list}

                    showsVerticalScrollIndicator={false}

                    data={tasks}

                    keyExtractor={(item, index) => 'key' + index}

                    renderItem={({ item, index }) => (
                        <TaskComponent
                            task={item}
                            onRemove={() => { handleTaskRemove(index) }}
                            handleTaskDone={() => { handleAllTasksDone() }}
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