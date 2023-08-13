// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { postId } = req.query;
    const id = parseInt(postId as unknown as string);
    const comments = await prisma.comment.findMany({
      where: { postId: id },
      include: {
        user: true
      }
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
