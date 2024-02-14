export function Navegacao({ alterarPaginaSelecionada }) {
    return (
      <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => alterarPaginaSelecionada(0)}/>
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => alterarPaginaSelecionada(1)}/>
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => alterarPaginaSelecionada(2)}/>
        <label htmlFor="pagina-2">Bebidas</label>
      </div>
    );
  }
  
  export default Navegacao;
  