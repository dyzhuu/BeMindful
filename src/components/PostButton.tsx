import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export function TextareaForm() {
  const form = useForm();
  const queryClient = useQueryClient();
  const session = useSession()
  console.log(session)

  const {toast} = useToast()
  
  function onSubmit(data: any) {
    const postData = {
      authorId: session.data?.user?.id!,
      content: data.content as string
    }
    mutation.mutate(postData);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(postData, null, 2)}</code>
        </pre>
      ),
    });
  }

  const mutation = useMutation({
    mutationFn: async (data: {authorId: string, content: string}) => {
      return fetch(
        `api/post`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['feed'] });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Error encountered while posting',
      });
    },
  });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little bit about yourself'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <DialogPrimitive.Close asChild>
          <Button type='submit' className='w-full'>
            Post
          </Button>
        </DialogPrimitive.Close>
      </form>
    </Form>
  );
}

export function PostButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Share Your Gratitude</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Express Gratitude</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <TextareaForm></TextareaForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
