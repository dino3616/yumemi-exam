import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Image } from '@/common/component/image/image.presenter';

export type AvatarProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'children' | 'src' | 'alt' | 'width' | 'height'> & {
  size: Required<Pick<ComponentPropsWithoutRef<typeof Image>, 'width'>>['width'];
};

export const Avatar: FC<AvatarProps> = ({ size, className, ...props }) => (
  <Image priority src="/favicon.png" alt="avatar" width={size} height={size} className={twMerge('rounded-[2.0rem]', className)} {...props} />
);
