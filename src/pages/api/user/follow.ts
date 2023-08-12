// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { followerId, followingId } = req.body;
    const post = await prisma.follows.create({
      data: {
        followerId: followerId,
        followingId: followingId,
      },
    });
    res.status(201).json(post);
  }
}