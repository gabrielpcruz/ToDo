import { View, FlatList } from "react-native"
import { useEffect, useState } from "react";
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

    async function handleAllTasksDone() {   
        setTasksConcluidas(tasks.reduce((acumulator, task, index) => {
            if(task.isDone()) {
                return acumulator + 1;
            }

            return acumulator;
            }, 0)
        );
    }

    useEffect(() => {
        handleAllTasksDone();
    })
    
    function handleTaskAdd(taskDescription: string) {
        const task = new Task(taskDescription);

        setTasks(prevState => [...prevState, task]);
    }

    function handleTaskRemove(taskId: string)  {        
        setTasks(prevState => prevState.filter((taskItem, index) => taskId !== taskItem.getId()));
        handleAllTasksDone();
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

                    keyExtractor={(item, index) => item.getId()}

                    renderItem={({ item, index }) => (
                        <TaskComponent
                            key={item.getId()}
                            task={item}
                            onRemove={() => { handleTaskRemove(item.getId()) }}
                            handleTaskDone={handleAllTasksDone}
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