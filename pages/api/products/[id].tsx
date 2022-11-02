// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  name: string;
  price: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const { id } = req.query
  
  res.status(200).json({
    price: 20 + Math.round((Math.random() * 50)),
    name: `Product ${id}`,
  });
}
