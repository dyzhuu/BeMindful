// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {userId} = req.body;
  res.status(200).json({ data: userId });
  // const feed = await prisma.user.findUnique({
  //   where: {
  //     id: userId
  //   },
  //   include: {
  //     following: {
  //       include: {
  //         following: {
  //           include: {
  //             posts: true  
  //           }
  //         }
  //       }
  //     }
  //   }

  // })
}
