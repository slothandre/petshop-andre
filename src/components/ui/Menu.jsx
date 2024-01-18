import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  const nomeRota = usePathname();
  return (
    <StyledNav>
      <Link className={nomeRota === "/" ? "ativo" : ""} href="/">
        Blog
      </Link>
      <Link
        className={nomeRota === "/produtos" ? "ativo" : ""}
        href="/produtos"
      >
        Produtos
      </Link>
      <Link className={nomeRota === "/sobre" ? "ativo" : ""} href="/sobre">
        Sobre
      </Link>
      <Link className={nomeRota === "/contato" ? "ativo" : ""} href="/contato">
        Contato
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .ativo {
    background-color: #000;
  }

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
