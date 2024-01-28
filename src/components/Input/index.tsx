import { View, TextInput, Image, TouchableOpacity } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

type Props = {
    taskAdd: (task: string) => void;
}

export function Input({ taskAdd }: Props) {

    const [taskInput, setTaskInput] = useState('');

    function handleAdd() {

        if(taskInput.trim()) {
            taskAdd(taskInput);
        }

        setTaskInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                cursorColor="#808080"
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                onChangeText={setTaskInput}
                value={taskInput}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { handleAdd() }}
            >
                <Image
                    style={styles.imageButton}
                    source={require("./../../../assets/img/plus.png")}
                />
            </TouchableOpacity>
        </View>
    )
}