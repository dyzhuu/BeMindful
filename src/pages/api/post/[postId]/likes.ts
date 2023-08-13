// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { postId } = req.query
    const id = parseInt(postId as unknown as string)
    const likes = await prisma.like.findMany({
      where: { postId: id },
    });
    res.status(200).json(likes.length);
  } else if (req.method === 'POST') {
    const { userId, postId } = req.body;
    const like = await prisma.like.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });
    res.status(201).json(like);
  }
}
