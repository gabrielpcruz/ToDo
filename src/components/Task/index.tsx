import { View, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react";
import { TaskInterface } from "../../classes/Task";

import { styles } from "./styles"

type Props = {
    task: TaskInterface,
    onRemove: () => void;
    handleTaskDone: () => void;
}

export function TaskComponent( { task, onRemove, handleTaskDone }: Props) {
    const [status, setStatus] = useState(false);

    const { text, textChecked } = styles;

    const imageChecked = "./../../../assets/img/checked.png";
    const imageUnchecked = "./../../../assets/img/check.png";

    function taskStatus() {
        const taskStatus = !status;

        setStatus(taskStatus);        
        
        if (taskStatus) {
            task.done();
        } else {
            task.unDone();
        }

        handleTaskDone();
    }

    function getStyleText() {
        return status ? [text, textChecked] : [text];
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.bolinha}
                onPress={taskStatus}
            >
                <Image
                    source={status ? require(imageChecked) : require(imageUnchecked)}
                />
            </TouchableOpacity>

            <Text style={[getStyleText()]}>
                {task.getDescription()}
            </Text>


            <TouchableOpacity
                style={styles.trash}
                onPress={onRemove}
            >
                <Image
                    style={styles.trashImage}
                    source={require('./../../../assets/img/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}