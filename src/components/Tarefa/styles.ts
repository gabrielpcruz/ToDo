import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 70,
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#333333',
        color: 'white'
    },
    bolinha: {
        backgroundColor: 'red',
        left: 0
    },
    texto: {
        backgroundColor: 'blue',
    },
    lixiera: {
        backgroundColor: 'green',
        right: 0
    }
});