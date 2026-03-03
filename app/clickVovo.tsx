import React from "react";


export default function ClickVovo() {

  return (
  <>
    <ClickVovoCookie></ClickVovoCookie>
  </>
  );
}


let valor = 1; 
function ClickVovoCookie(){
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
    
  function zerarCookie(){
    setQuantidade(quantidade - quantidade)
  }
  
  function diminuirCookie(){
    setQuantidade(quantidade - quantidade)
  
    return(
      <>
        <h1>Cookie Clicker</h1>
        <p>quantidade de cookies: {quantidade}</p>
        <button onClick= {()=> setQuantidade(quantidade + 1)}> clique aqui para ganhar um cookie</button> 
        {quantidade? botoesExtras:null}
      </>
  
  
    )
  }
}