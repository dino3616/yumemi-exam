import NextLink from 'next/link';
import { ComponentPropsWithoutRef, forwardRef, ForwardRefExoticComponent } from 'react';

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link: ForwardRefExoticComponent<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => (
  <NextLink ref={ref} scroll={false} {...props}>
    {children}
  </NextLink>
));

Link.displayName = 'Link';
