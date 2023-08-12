// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
    res.status(200).json({ allUsers });
  } else if (req.method ==='POST') {
    const { username, email } = req.body
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
      },
    });
    res.status(201).json(user)
  }
}