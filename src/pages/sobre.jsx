import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Missão, visão e valores do nosso PetShop"
        />
        <meta name="keywords" content="petshop, missão, visão, valores" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>
        <Container>
          <h3>Missão</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            nam quas expedita, vero molestiae aliquid vitae molestias officiis
            unde nisi dolore praesentium sunt rem? Facilis quas reprehenderit
            reiciendis officia id.
          </p>
          <h3>Visão</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae ipsa maxime porro ab quasi expedita explicabo velit et
            voluptates quod temporibus quibusdam quo culpa neque, corporis
            cumque voluptatum vitae!
          </p>
          <h3>Valores</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa maxime consequatur adipisci totam enim?
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
