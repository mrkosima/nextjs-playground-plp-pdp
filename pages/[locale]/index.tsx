import Link from 'next/link';

type PlpProps = {
  products: string[];
}

export default function Pdp(props: PlpProps) {
  const { products } = props;
  return (
    <div>
      <p>Products Listing:</p>
      <ul>
        {products?.map && products.map(p => (
          <Link href={`/en-us/${p}`} key={p}>Product {p}</Link>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const products = await fetch('http://localhost:3000/api/products').then(res => res.json());
  console.log('[PLP] getServerSideProps', { products });
  return {
    props: {
      products,
    }
  }
}
