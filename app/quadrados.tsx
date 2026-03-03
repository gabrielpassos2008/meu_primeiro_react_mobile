import React from "react";
import { View } from "react-native";


export default function Quadrados() {

  return (
    <View style={{flex:1, flexDirection:'column', backgroundColor:'black'}}>
      <View style={{height:'25%',padding:10}}>
        <ComponenteDivididoEmQuatro></ComponenteDivididoEmQuatro>     
      </View>    
    </View>
  );
}

function ComponenteDivididoEmQuatro() {
  function Painel() {
    return (
      <View style={{
        width:'50%', height:'50%',
        borderColor:'black', borderWidth:1,
        backgroundColor:'orange'
      }}></View>
    );
  }
  function Bolinha(){
    return(
    <View style={{
      width:'50%', height:'50%',
      borderRadius:'50%',
      borderColor:'black', borderWidth:1,
      backgroundColor:'orange'
    }}>
    </View>)
  }
    return (
      <>
      <View style={{flex:1, flexWrap:'wrap', flexDirection:'row', backgroundColor:'blue'}}>
        <Painel></Painel>
        <Painel></Painel>
        <Painel></Painel>
        <Painel></Painel>
        <Bolinha></Bolinha>
        <Bolinha></Bolinha>
        <Bolinha></Bolinha>
        <Bolinha></Bolinha>
      </View>
      </>
    );
  
}

