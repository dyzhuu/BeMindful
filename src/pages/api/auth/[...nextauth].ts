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
    error: '/home',
  },
  callbacks: {
    async signIn({ user, account }: any) {
      if (!(await fetch(`${URL}/api/user/${user.email}`)).ok) {
        const res = await fetch(`${URL}/api/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: user.id,
            username: user.name,
            email: user.email,
          }),
        });
      }
      return true;
    },
    async session({ session }: any) {
      const res = await fetch(`${URL}/api/user/${session.user.email}`);
      const userId = (await res.json()).user.id
      session.user.id = userId;  
      return session;
    },
  },
};

export default NextAuth(authOptions);
