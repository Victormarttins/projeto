import { useState } from "react";
import { View,Text, Button } from "react-native";

export default function FunctionComponent(){
    const [ contador,setContador]= useState (0);

    function increment(){
        setContador (contador +1);
    }

    return(
       <><Text> {contador}</Text><Button title="clique" onPress={() => { increment(); } } /></>
    )
}