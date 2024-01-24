import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 60,
        maxWidth: '90%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        top: -30,
    },
    imageButton: {
    },
    button: {
        flex: 1,
        height:'100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#1E6F9F',
        borderRadius: 5
    },
    input: {
        flex: 7,
        height:'100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        paddingLeft: 20,
        color: '#808080',
        fontSize: 16
    }
});