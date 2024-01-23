import { View, TextInput, Image, TouchableOpacity } from "react-native"

import { styles } from "./styles"


export function Input() {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                cursorColor="#808080"
            />

            <TouchableOpacity
                style={styles.button}
            >
                <Image
                    style={styles.imageButton}
                    source={require("./../../../assets/img/plus.png")}
                />
            </TouchableOpacity>
        </View>
    )
}