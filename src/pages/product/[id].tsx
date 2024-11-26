import { useRouter } from "next/router";
import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          reiciendis aliquid placeat earum, doloremque minima qui nisi! Aliquid
          magni beatae atque? Eveniet tempore commodi veritatis totam voluptas
          fugit sed quaerat!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
