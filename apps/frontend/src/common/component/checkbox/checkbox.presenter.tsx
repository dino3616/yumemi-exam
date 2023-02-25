import * as RadixUiCheckbox from '@radix-ui/react-checkbox';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type RootProps = ComponentPropsWithoutRef<typeof RadixUiCheckbox.Root> &
  Required<Pick<ComponentPropsWithoutRef<typeof RadixUiCheckbox.Root>, 'aria-label'>>;

const Root: FC<RootProps> = ({ children, className, ...props }) => (
  <RadixUiCheckbox.Root
    {...props}
    aria-label={props['aria-label']}
    style={{ WebkitTapHighlightColor: 'transparent', cursor: 'pointer' }}
    className={twMerge(
      'flex h-6 w-6 items-center justify-center rounded-lg bg-white shadow-inner transition-all focus:bg-accent-200/70 hover:bg-accent-200/70',
      className,
    )}
  >
    {children}
  </RadixUiCheckbox.Root>
);

type IndicatorProps = ComponentPropsWithoutRef<typeof RadixUiCheckbox.Indicator>;

const Indicator: FC<IndicatorProps> = ({ children, className, ...props }) => (
  <RadixUiCheckbox.Indicator {...props} className={twMerge('text-accent-500', className)}>
    {children}
  </RadixUiCheckbox.Indicator>
);

export const Checkbox = { ...RadixUiCheckbox, Root, Indicator };
