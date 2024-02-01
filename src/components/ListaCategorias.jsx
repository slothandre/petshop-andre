import styled from "styled-components";

export default function ListaCategorias(props) {
  return (
    <StyledCategorias>
      {props.categorias.map((categoria, indice) => {
        return (
          <button
            className={categoria === props.categoriaAtiva ? "ativo" : ""}
            onClick={props.onFiltrar}
            key={indice}
          >
            {categoria}
          </button>
        );
      })}

      {props.filtroAtivo && (
        <button onClick={props.onLimparFiltro} className="limpar">
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
}

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  flex-wrap: wrap;

  button {
    text-transform: capitalize;
    border: none;
    background-color: var(--cor-secundaria-fundo);
    color: #f7f7f7;
    padding: 0.5rem;
    border-radius: var(--borda-arredondada);

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
      cursor: pointer;
    }

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  .limpar {
    background-color: gray;
    &:hover {
      background-color: slategray;
    }
    &::before {
      content: "🧹 ";
    }
  }
`;
