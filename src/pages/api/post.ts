// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { authorId, content } = req.body;
    const post = await prisma.post.create({
      data: {
        authorId: authorId.toString(),
        content: content,
      },
    });
    res.status(201).json(post);
  }
}
