import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export type ButtonVariant = 'primary' | 'ghost' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  block?: boolean;
}

const baseClass = 'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-black hover:brightness-110',
  ghost: 'bg-transparent hover:bg-neutral-900/60 text-neutral-200',
  danger: 'bg-red-500 text-white hover:brightness-110',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', className, block, ...props }, ref
) {
  return (
    <button
      ref={ref}
      className={clsx(baseClass, variantClass[variant], block && 'w-full', className)}
      {...props}
    />
  );
});