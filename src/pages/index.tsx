import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'; // Added React import

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  

  
  if (session.status === 'unauthenticated') {
    return (
      <div className='flex justify-center items-center h-[100vh] bg-gradient-to-br  '>
        <Card className='border-card shadow-none md:border-border md:shadow-sm h-[100vh] w-[100vw] md:h-fit md:min-h-[250px] md:max-w-[480px] p-10 md:p-16 md:py-24 flex justify-center items-center bg-gradient-to-br from-white-300 to-grey-400 rounded-lg'>
          <div className='flex flex-col w-[350px] text-center space-y-8'>
            <h1 className='text-3xl font-semibold tracking-tight text-black-500'>
            Log In to BeHealthy.
            </h1>
            <p className='text-sm text-black-500'>
              Welcome to the awesome app! You must first Please log in to continue.
            </p>
            <Button onClick={() => signIn('google')}>
              Log in with Google 🌐
            </Button>
          </div>
        </Card>
      </div>
    );
  } else {
    router.push('/home');
    return null;
  }
}
