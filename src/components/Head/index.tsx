import { View, TextInput, Image, ImageBackground, TouchableOpacity } from "react-native"

import { styles } from "./styles"


export function Head() {
    return (
        <View style={styles.container}>
            <Image
                source={require('./../../../assets/img/logo.png')}
            />
        </View>
    )
}