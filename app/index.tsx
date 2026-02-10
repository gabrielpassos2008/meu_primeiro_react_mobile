import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    
    <View>
      <FichaUsuario login = {'gabriel'} email = {'gabriel@gmail'} nome = {'gabrielName'} contatos={['(51) 995441888', '(55) 995441768']} ></FichaUsuario>
      <Form_box   links={['home','Solicitar Guincho','Solicitações anteriores',"sair"]}
                  aparecer
      ></Form_box>
      
    </View>
  );
}
function ListaContatos({contatos}){
  return(
    <>
      <h2>contatos</h2>
      <ul>
        <li>{contatos[0]}</li>
        <li>{contatos[1]}</li>
      </ul>
    
    
    </>

  )
}


function ListaDatalhes({nome,email}){
  return(
    <>
    <h2>datalhes</h2>
    <ol>
      <li>nome: {nome}</li>
      <li>Email: {email}</li>
    </ol>
    </>
  );

}
function FichaUsuario({login,nome,email,contatos}){
  return(
    <>
      <h1>Ficha do usuario</h1>
      <strong>Login: {login}</strong>
      <ListaDatalhes nome = {nome} email = {email}></ListaDatalhes>
      <ListaContatos contatos={contatos}></ListaContatos>
      
    </>
  )
}
function Form_box (props){
  return(
  <footer>
      {props.aparecer? (
        <ul>
          <li><a >{props.links[0]}</a></li>    
          <li><a >{props.links[1]}</a></li>
          <li ><a >{props.links[2]}</a></li>
          <li ><a >{props.links[3]}</a></li>
        </ul>) : 
            <h1>Você NÃO tem permissão para acessar esse sistema, SAIA!!!!!!</h1>
        }
      <hr />
      <p >© 2025 — Desenvolvido por Gabriel</p>
  </footer>
  );
}


