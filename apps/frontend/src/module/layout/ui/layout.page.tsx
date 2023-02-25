import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Footer } from '@/module/layout/ui/component/footer/footer.presenter';
import { Header } from '@/module/layout/ui/component/header/header.presenter';
import { Meta } from '@/module/layout/ui/component/meta/meta.container';

export type LayoutProps = ComponentPropsWithoutRef<typeof motion.main> & Pick<ComponentPropsWithoutRef<typeof Meta>, 'title'>;

export const Layout: FC<LayoutProps> = ({ title, className, children, ...props }) => (
  <>
    <Meta title={title} />
    <Header className="sticky top-0 left-0 grow-0" />
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={twMerge('min-h-full grow', className)} {...props}>
      {children}
    </motion.main>
    <Footer className="grow-0" />
  </>
);
