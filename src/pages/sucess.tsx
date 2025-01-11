import Link from "next/link";
import { SucessContainer, ImageContainer } from "../styles/pages/sucess";

export default function Succes() {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Feranandes</strong>, sua{" "}
        <strong>Camiseta Beyond the Limits</strong>
        já esta a caminho da sua caasa.
      </p>

      <Link href="/">Voltar ao catalogo</Link>
    </SucessContainer>
  );
}
