import { View, Image } from "react-native"

import { styles } from "./styles"


export function Head() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageLogo}
                source={require('./../../../assets/img/logo.png')}
            />
        </View>
    )
}