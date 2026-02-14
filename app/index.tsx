import React from "react";

export default function Index() {
  const [jogadorLogado, setjogadorLogado] = React.useState(false);

  return (
    <div>
      <Login 
        jogadorLogado={jogadorLogado} 
        setjogadorLogado={setjogadorLogado} 
      />

      <CookieClicker 
        jogadorLogado={jogadorLogado} 
      />
    </div>
  );
}

function CookieClicker({ jogadorLogado }) {
  const [cookies, setCookies] = React.useState(0);
  const [vovoLigada, setVovoLigada] = React.useState(false);

  function clickCookie(){ 
    let quantidadeDeCookies = vovoLigada ? 10 : 1; 
    setCookies(cookies = quantidadeDeCookies)
  }
  if (!jogadorLogado) return null;

  return (
    <div>
      <h2>Cookies: {cookies}</h2>
      <input 
        type="button"
        value="Clique no Cookie"
        onClick={clickCookie}
      />
      <input 
        type="button"
        value="Ativar Vovó"
        onClick={() => setVovoLigada(true)}
      />
    </div>
  );
}
function Login({ setjogadorLogado }) {
  const [nome, setNome] = React.useState("");

  function nomeMudou(evento) {
    setNome(evento.target.value);
  }
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          setjogadorLogado(true);
          console.log("Jogador logado:", nome);
        }}>
        <label>Nome do jogador</label>
        <input 
          type="text"
          name="nome"
          onChange={nomeMudou}
        />
        <input 
          type="submit"
          value="Logar"
        />
      </form>
    </div>
  );
}


