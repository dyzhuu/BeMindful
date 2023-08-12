// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    let { postId } = req.body
    const likes = await prisma.like.findMany({
      where: { postId: postId },
    });
    console.log(likes);
    res.status(200).json({ likes });
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
