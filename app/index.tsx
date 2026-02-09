import { View } from "react-native";
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
export default function Index() {
  return (
    
    <View>
      <Form_box   links={['home','Solicitar Guincho','Solicitações anteriores',"sair"]}
                  aparecer
      ></Form_box>
    </View>
  );
}
