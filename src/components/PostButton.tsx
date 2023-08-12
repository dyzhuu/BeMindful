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

export function TextareaForm() {
  const form = useForm();
  const {toast} = useToast()
  function onSubmit(data: any) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='post'
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
