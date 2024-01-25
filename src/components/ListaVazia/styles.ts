import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        marginTop: 50,
        borderTopColor: '#333333',
        borderTopWidth: .7,
    },
    image: {
        marginBottom: 20
    },
    textoPrincipal: {
        color: '#808080',
        fontWeight: "900"
    },
    textoSecundario: {
        color: '#808080',
        fontWeight: "300"

    }
})