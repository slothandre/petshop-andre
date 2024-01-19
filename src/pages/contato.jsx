import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          content="Entre em contato conosco pelo formulário abaixo"
        />
        <meta name="keywords" content="petshop, contato" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>
        <Container>
          <form action="#" method="post">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
  textarea {
    resize: none;
  }
`;
