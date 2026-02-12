import React from "react";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    
    <ScrollView>
        <CookieClicker></CookieClicker>
    </ScrollView>
  );
}

function CookieClicker(){
const botoesExtras=<>
  <button onClick= {diminuirCookie}> clique aqui para dimunir um cookie</button> 
  <button onClick= {zerarCookie}> clique aqui para zerar um cookie</button> 
</>
const [quantidade,setQuantidade] = React.useState(0);

function ganharCookie(){
  setQuantidade(quantidade + 1);
}
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
      <button onClick= {ganharCookie}> clique aqui para ganhar um cookie</button> 
      {quantidade? botoesExtras:null}
    </>


  )
}


