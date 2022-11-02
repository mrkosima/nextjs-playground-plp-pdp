import Link from 'next/link';

type PdpProps = {
  product: {
    name: string;
    price: number;
  };
}

export default function Pdp(props: PdpProps) {
  const { product: { name, price } } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{name}</p>
      <p>{price} EUR</p>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { pdp } = context.query;
  const product = await fetch(`http://localhost:3000/api/products/${pdp}`).then(res => res.json());
  console.log('[PDP] getServerSideProps', { product });
  return {
    props: {
      product,
    }
  }
}
