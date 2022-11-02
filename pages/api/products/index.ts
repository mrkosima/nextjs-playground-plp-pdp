// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Products = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  const rnd = Math.round(Math.random() * 100);
  const count = Math.round(Math.random() * 10) + 5;
  const products = new Array(count).fill('').map((_, i) => `${rnd}_product_${i}_of_${count}`);
  res.status(200).json(products);
}
