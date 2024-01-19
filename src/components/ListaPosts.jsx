import Link from "next/link";
import styled from "styled-components";

export default function ListaPosts(props) {
  return (
    <>
      <StyledListaPosts>
        <article key={props.id}>
          <Link href="">
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
          </Link>
        </article>
      </StyledListaPosts>
    </>
  );
}

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: #000;

      &:hover,
      &:focus {
        color: #06f;
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }
`;
