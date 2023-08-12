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
import { Textarea } from './ui/textarea';

export function PostButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Post</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Post message</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Textarea></Textarea>
        </div>
        <Button type='submit'>Post</Button>
      </DialogContent>
    </Dialog>
  );
}
