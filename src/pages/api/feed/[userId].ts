// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;
  const feed = await prisma.user.findUnique({
    where: {
      id: userId?.toString()
    },
    include: {
      following: {
        include: {
          following: {
            include: {
              posts: {
                include: {
                  author: true
                }
              }
            }
          }
        }
      }
    }

  })
  const ownPosts = (await prisma.user.findUnique({
    where: {
      id: userId?.toString(),
    },
    include: {
      posts: {
        include: {
          author: true
        }
      }
    }
  }))?.posts;
  const followingPosts: any = feed?.following.map(user => user.following.posts).flat()
  if (!followingPosts) {
    return ownPosts
  }
  const allPosts = followingPosts.concat(ownPosts)
  allPosts.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  res.status(200).json(allPosts);
}
