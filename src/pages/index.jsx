import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
        <StyledListaPosts>
          <article>
            <Link href="">
              <h3>Título do post...</h3>
              <p>Subtítulo do post...</p>
            </Link>
          </article>
        </StyledListaPosts>
      </StyledHome>
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
`;

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
