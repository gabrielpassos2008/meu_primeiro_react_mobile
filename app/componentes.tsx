export function Ohhh(props){  
    return(
        <div>
          <header > 
            <ul >
                <li><a>{props.itens[0]}</a></li>
                <li><a>{props.itens[1]}</a></li>
                <li><a>{props.itens[2]}</a></li>
                <li><a>{props.itens[3]}</a></li>
                <li><a>{props.itens[4]}</a></li>
            </ul>
            </header>
        </div>
    );
  }

  function ListarProdutos({categoria,lista}){
    return(
      <>
        <h2>categoria: {categoria}</h2>
         <ol>
            {
                lista.map(produtos => <li>{produtos}</li>)
            }
         </ol>
      </>
    );
  }  
  
  
  
  function Produtos({lista}){
    return(
      <>
        <h1>Lista de Produtos</h1>
        <ul>{
          lista.map(produto => <li>{produto}</li>)
        }
        </ul>
      </>
  
    )
    
  }
  function BoxProdutos({data}){
    return(
      <>
        <h1>suas lista de produtos:</h1>
        <strong>data de hoje: {data}</strong>
        <ListarProdutos categoria={"Bebidas"} produtos={['Coca-Cola','Suco de Laranja Natural','Água Mineral','Energético Red Bull']} ></ListarProdutos>
        <ListarProdutos categoria={"Frutas"} produtos={['Maçã','Banana','Laranja','Melancia']} ></ListarProdutos>
        <ListarProdutos categoria={"Produtos de limpeza"} produtos={['Detergente','Sabão em pó','Água sanitária (cloro)','Desinfetante']} ></ListarProdutos>
      </>
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

function FormBox (props){
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