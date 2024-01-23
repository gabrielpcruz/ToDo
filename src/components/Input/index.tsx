import { View, TextInput, Text, Image, TouchableOpacity } from "react-native"

import { styles } from "./styles"


export function Input() {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
            />

            <TouchableOpacity>
                <Image
            
                    source="./../../../assets/img/plus.png"
                />
            </TouchableOpacity>
        </View>
    )
}