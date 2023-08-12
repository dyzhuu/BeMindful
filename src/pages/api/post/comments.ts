// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const postId = req.query;
    const comments = await prisma.comment.findMany({
      where: { postId: postId },
    });
    res.status(200).json({ comments });
  } else if (req.method === 'POST') {
    const { userId, postId, content } = req.body;
    const comment = await prisma.comment.create({
      data: {
        content: content,
        userId: userId,
        postId: postId,
      },
    });
    res.status(201).json(comment);
  }
}
