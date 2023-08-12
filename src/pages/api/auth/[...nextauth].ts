import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const URL = process.env.NEXTAUTH_URL!;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/',
    newUser: '/',
  },
  callbacks: {
    async signIn({ user }: any) {
      try {
        console.log(user.name, user.email)
        const res = await fetch(`${URL}/api/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.name,
            email: user.email,
          }),
        });
        console.log(await res.json())
      } catch {
      }
      return true
    },
  },
};

export default NextAuth(authOptions);
