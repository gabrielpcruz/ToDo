import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 70,
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#333333',
        color: 'white'
    },
    bolinha: {
        marginLeft: 15,
        flex: .5,
    },
    text: {
        flex: 6,
        margin: 15,
        height: '60%',
        overflow: 'scroll',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F2F2F2',
    },
    textChecked: {
        textDecorationLine: 'line-through'
    },
    trash: {
        flex: 1,
        marginRight: 10,
    },
    trashImage: {
        width: '65%',
        height: '65%',
    }
});