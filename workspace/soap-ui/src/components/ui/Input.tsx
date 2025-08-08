import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={clsx('text-sm text-neutral-300 mb-1 block', className)}>{children}</label>
);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={clsx('w-full rounded-lg bg-muted/60 border border-neutral-800 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40', className)} {...props} />
});

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select({ className, ...props }, ref) {
  return <select ref={ref} className={clsx('w-full rounded-lg bg-muted/60 border border-neutral-800 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40', className)} {...props} />
});

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={clsx('w-full rounded-lg bg-muted/60 border border-neutral-800 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40', className)} {...props} />
});