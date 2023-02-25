import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { NavigationMenu } from '@/common/component/navigation/navigation.presenter';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header className={twMerge('z-50 bg-white py-6 px-5 shadow-lg', className)} {...props}>
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center justify-center md:justify-start md:space-x-7">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/" className="text-lg font-bold uppercase tracking-wide">
            Yumemi Inc. coding exam <span className="hidden md:inline">@ shio</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </header>
);
