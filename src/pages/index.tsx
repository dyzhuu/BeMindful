import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  if (session.status === 'loading') {
    return
  }
  if (session.status === 'unauthenticated') {
    return (
      <div className='flex justify-center items-center h-[100dvh]'>
        <Card className='border-card shadow-none md:border-border md:shadow-sm h-[100dvh] w-[100dvw] md:h-fit md:min-h-[650px] md:max-w-[480px] p-10 md:p-16 md:py-24 flex justify-center items-center'>
          <div className='flex flex-col w-[350px] text-center space-y-8'>
            <h1 className='text-3xl font-semibold tracking-tight'>Log In</h1>
            <Button onClick={() => signIn('google')}>Log in with Google</Button>
          </div>
        </Card>
      </div>
    );
  } else {
    router.push('/home');
  }
}
