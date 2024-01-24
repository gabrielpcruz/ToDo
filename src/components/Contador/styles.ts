import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    label: {
       color: 'white',
       padding: 4,
       fontSize: 15,
       fontWeight: '900'
    },
    contador: {
        width: 25,
        height: 25,
        backgroundColor: '#262626',
        padding: 5,
        color: 'white',
        borderRadius: 10
    }
});