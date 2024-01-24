import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
       color: 'white',
       padding: 4,
       fontSize: 15,
       fontWeight: '900'
    },
    contador: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        padding: 1,
        color: 'white',
        borderRadius: 10,
        marginLeft: 6,
        fontWeight: '500'
    },
    left: {
        position: 'absolute',

        left: 0
    },
    right: {
        position: 'absolute',

        right: 0
    }
});