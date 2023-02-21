import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type CardProps = ComponentPropsWithoutRef<'div'>;

export const Card: FC<CardProps> = ({ className, children, ...props }) => (
  <div className={twMerge('flex flex-col gap-2 rounded-lg bg-white p-4 drop-shadow', className)} {...props}>
    {children}
  </div>
);
