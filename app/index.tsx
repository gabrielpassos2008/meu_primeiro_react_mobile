import React, { useState } from "react";
import { Button, Text } from "react-native-paper";


export default function Index() {

  return (
    <>
    <Text variant="displaySmall">dsadas</Text>
    <CookieClicker></CookieClicker>   
    </>
  );
}

function BarraDeCookies({quant, setCookies}) {
  function resetarCookies() {
    setCookies(0)
  }

  return (
    <>
    <p onClick={resetarCookies}>{"🍪".repeat(quant/10)}</p>

    </>

  );

}

function Manual(){
  return(
    <>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita minima fuga nulla ullam illo perferendis molestiae, laboriosam consectetur quas similique aut debitis esse blanditiis ad dicta unde maiores cumque quasi?</p>
    </>
  )

}
function CookieClicker() {
  const [quantCookies, setQuantCookies] = useState(0)
  const [mostrarManual, setMostrarManual] = React.useState(false);


  function ganharCookie(){
    // pode fazer várias coisas...

    setQuantCookies(quantCookies + 1)
    
    
    //...e outras coisas depois...   
   }

  return (
    <>    
    <input type="number" value={quantCookies}></input>  
    <Button icon="camera" mode="contained" onPress={ganharCookie}>
    Press me
  </Button>  
    <BarraDeCookies quant={quantCookies} setCookies={setQuantCookies}></BarraDeCookies>
    
    <button onClick={()=> {setMostrarManual(!mostrarManual)}}>instruçoes</button>
    {mostrarManual? <Manual></Manual>: null}
    </>
  );

}