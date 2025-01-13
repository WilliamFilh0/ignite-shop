import Link from "next/link";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { SucessContainer, ImageContainer } from "../styles/pages/sucess";
import Image from "next/image";

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Succes({ customerName, product }: SucessProps) {
  return (
    <SucessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua{" "}
        <strong>{product.name}</strong>
        já esta a caminho da sua caasa.
      </p>

      <Link href="/">Voltar ao catalogo</Link>
    </SucessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
