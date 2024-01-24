import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        borderBottomColor: '#333333',
        borderBottomWidth: .7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        marginBottom: 80,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        flex:1,
        backgroundColor: '#262626',
        height: 60,
        borderRadius: 5
    },
});