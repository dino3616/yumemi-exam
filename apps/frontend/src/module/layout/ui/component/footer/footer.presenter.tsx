import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Avatar } from '@/common/component/avatar/avatar.presenter';

export type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer className={twMerge('flex flex-col items-center justify-center space-y-10 bg-accent py-10 text-primary-800', className)} {...props}>
    <div className="flex flex-wrap-reverse items-center justify-center gap-5">
      <span className="text-center text-5xl font-semibold">
        Yumemi Inc.
        <br />
        <span className="text-3xl">coding exam</span>
      </span>
      <Avatar size={120} />
    </div>
    <small className="text-sm font-semibold">Copyright &copy; shio all right reserved.</small>
  </footer>
);
