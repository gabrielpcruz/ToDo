import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native"

import { styles } from "./styles"

import { Head } from "../../components/Head"
import { Body } from "../../components/Body"
import { Input } from "../../components/Input"

export function Home() {
    return (
        <View style={styles.container}>
            <Head />

            <Input />

            <Body />
        </View>
    )
}