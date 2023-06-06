import React from "react";
import { Component } from "react";
import {  Button, Text, View} from 'react-native';

interface Props{

}
interface State{
   contador:number; 
   
}

 export default class ClassComponent extends React.Component <Props,State> {
    
  constructor(props:Props){
    super(props);
    this.state={contador:0,};
  }
  private increment(){
    const calculo=this.state.contador+1;

   this.setState({contador:calculo});
}

    render() {
        return (
            <View>
                <Text> {this.state.contador}</Text>
                <Button title="clique" onPress={() => { this.increment(); } } />
            </View>
        );
    }
 } 