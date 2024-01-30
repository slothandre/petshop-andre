import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = () => {
    console.log("Enviando dados...");
  };

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
              <input {...register("nome")} type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                {...register("mensagem")}
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
  input {
    height: 40px;
  }
  input,
  textarea {
    border: none;
    box-shadow: var(--sombra-box);
    width: 70%;
    padding: 0.5rem;
  }
  label {
    font-weight: bold;
    width: 30%;
  }
  button {
    padding: 1rem;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    border: none;
  }
  button:hover {
    cursor: pointer;
    background-color: var(--cor-primaria-fundo-hover);
  }
  form div {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
