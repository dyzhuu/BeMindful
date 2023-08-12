// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query;
  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({
      where: {
        email: email?.toString()
      }
    });
    if (!user) {
      res.status(404).json('error');
    } else {
      res.status(200).json({ user });
    }
  }
}