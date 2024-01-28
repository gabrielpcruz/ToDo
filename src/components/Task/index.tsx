import { View, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react";

import { styles } from "./styles"

type Props = {
    taskText: string,
    onRemove: () => void;
}

type Task = {
    isDone: () => boolean;
}

export function Task({ taskText, onRemove }: Props) {
    const [status, setStatus] = useState(false);

    const { text, textChecked } = styles;

    const imageChecked = "./../../../assets/img/checked.png";
    const imageUnchecked = "./../../../assets/img/check.png";

    function taskStatus() {
        setStatus(!status);
    }

    function isDone () {
        return status;
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
                {taskText}
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