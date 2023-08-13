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

export function TextareaForm({ postId }: any) {
  const form = useForm();
  const queryClient = useQueryClient();
  const session = useSession();
  console.log(session);

  const { toast } = useToast();

  function onSubmit(data: any) {
    const postData = {
      content: data.content as string,
      userId: session.data?.user?.id!,
      postId: postId,
    };
    mutation.mutate(postData);
  }

  const mutation = useMutation({
    mutationFn: async (data: { userId: string; content: string; postId: number }) => {
      return fetch(`api/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
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
                <Textarea className='resize-none' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <DialogPrimitive.Close asChild>
          <Button type='submit' className='w-full'>
            Post Comment
          </Button>
        </DialogPrimitive.Close>
      </form>
    </Form>
  );
}

export function CommentButton({postId}: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          className={`hover:bg-transparent p-0 m-0`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='1.3em'
            viewBox='0 0 512 512'
          >
            <path d='M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z' />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Comment</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <TextareaForm postId={postId}></TextareaForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
