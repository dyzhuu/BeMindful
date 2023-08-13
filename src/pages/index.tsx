import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'; // Added React import

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'authenticated') {
    router.push('/home')
  }
  
  if (session.status === 'unauthenticated') {
    return (
      <div className='mainone flex flex-column justify-center items-center h-screen bg-gradient-to-br  '>

          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
          <div className="balloon"></div>
          <div className="bird"></div>

        <Card className='border-card shadow-none md:border-border md:shadow-sm h-[100vh] w-[100vw] md:h-fit md:min-h-[250px] md:max-w-[480px] p-10 md:p-16 md:py-24 flex justify-center items-center bg-gradient-to-br from-white-300 to-grey-400 rounded-lg'>
          <div className='flex flex-col w-[350px] text-center space-y-1'>
            <iframe src="https://embeds.beehiiv.com/32c7df82-9394-4781-aaa3-e7226743bc8f" data-test-id="beehiiv-embed" width="100%" height="240" style={{borderRadius: "4px", border: "2px", margin: "0", backgroundColor: "transparent",}}></iframe>
            <Button onClick={() => signIn('google')}>
              Log in with Google 🌐
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
