// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const { followerId, followingId } = req.body;
    const post = await prisma.follows.deleteMany({
      where: {
        followerId: followerId,
        followingId: followingId
      }
    });
    res.status(201).json(post);
  }
}
