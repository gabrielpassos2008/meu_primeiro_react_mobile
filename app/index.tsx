import React from "react";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    
    <ScrollView>
      <ClickVovo></ClickVovo>
    </ScrollView>
  );
}

let valor = 1; 
function ClickVovo(){

  const botoesExtras=<>
    <button onClick= {()=> setQuantidade(quantidade - 1)}>-</button> 
    <button onClick= {()=> setQuantidade(quantidade - quantidade)}> 0</button> 
  </>
  
  const [quantidade,setQuantidade] = React.useState(0);
    return(
      <>
        <h1>Cookie Clicker</h1>
        <p>quantidade de cookies: {quantidade}</p>
        <p>Vovó</p>
        <input type="checkbox" onChange={()=> valor == 10? valor = 1: valor = 10} />
        <button onClick= {()=> setQuantidade(quantidade + valor)}>+</button> 
        {quantidade? botoesExtras:null}
      </>
    )
  }

function CardLista({nome,lista}){
  
  const [aparecer, setTrue] = React.useState(false);

  return(
    <>
     <h1>Seja bem vindo </h1>
     <p>Nome: {nome} </p>
     <button onClick={()=>setTrue(!aparecer)}>Datalhes</button>
     {aparecer? <Lista lista={lista}></Lista>: null}
    </>
  )
}

function Lista({lista}){
  return(

  <>
    <ol>
      {lista.map(produtos => <li>{produtos}</li>)}
    </ol>
  </>

  )
}

function CookieClicker(){
const botoesExtras=<>
  <button onClick= {()=> setQuantidade(quantidade - 1)}> clique aqui para dimunir um cookie</button> 
  <button onClick= {()=> setQuantidade(quantidade - quantidade)}> clique aqui para zerar um cookie</button> 
</>
const [quantidade,setQuantidade] = React.useState(0);

function zerarCookie(){
  setQuantidade(quantidade - quantidade)
}

function diminuirCookie(){
  setQuantidade(quantidade - quantidade)
}

  return(
    <>
      <h1>Cookie Clicker</h1>
      <p>quantidade de cookies: {quantidade}</p>
      <button onClick= {()=> setQuantidade(quantidade + 1)}> clique aqui para ganhar um cookie</button> 
      {quantidade? botoesExtras:null}
    </>


  )
}


