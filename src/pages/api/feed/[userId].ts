// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;
  const feed = await prisma.user.findUnique({
    where: {
      id: userId as string
    },
    include: {
      following: {
        include: {
          following: {
            include: {
              posts: true
            }
          }
        }
      }
    }

  })
  const allPosts: any = feed?.following.map(user => user.following.posts).flat()
  res.status(200).json(allPosts);
}
