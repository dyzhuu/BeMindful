// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, username, email } = req.body;
  if (req.method === 'GET') {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({ allUsers });
  } else if (req.method ==='POST') {
    const user = await prisma.user.create({
      data: {
        id: id,
        username: username,
        email: email,
      },
    });
    res.status(201).json(user)
  }
}