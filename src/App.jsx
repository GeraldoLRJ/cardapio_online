import React from 'react';
import Hashtaurante from "./assets/hashtaurante.webp"
import './App.css'
import { Navegacao } from "./Navegacao"
import { ItemCardapio } from "./ItemCardapio"
import { pratosPrincipais, bebidas, sobremesas } from "./cardapio"

export default function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);
  return <>
      <img src={Hashtaurante} alt="" className="capa"/>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada}/>
      <div className="menu">
      {paginasMenu[paginaSelecionada].map((item, index) => (
          <ItemCardapio
            key={index} // Adicionando a chave única aqui
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
  </>
}