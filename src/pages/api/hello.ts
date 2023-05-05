// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// Edge Runtimeにするconfig
export const config = {
  runtime: 'edge',
};


export default function handler(
  req: NextApiRequest
) {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}
