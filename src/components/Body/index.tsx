import { View, FlatList } from "react-native"

import { styles } from "./styles"

import { Painel } from "../Painel"
import { ListaVazia } from "../ListaVazia";
import { Task } from "../Task";

type Props = {
    tasks: string[],
    setTasks: () => void;
}

export function Body({ tasks, setTasks } : Props) {



    return (
        
    )
}