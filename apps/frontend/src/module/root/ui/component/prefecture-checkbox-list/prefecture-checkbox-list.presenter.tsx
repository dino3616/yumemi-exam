import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { BsCheck } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { Checkbox } from '@/common/component/checkbox/checkbox.presenter';
import type { Prefecture } from '@/module/root/model/prefecture.model';

export type PrefectureCheckboxListProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  prefectures: Prefecture[];
  onCheckedChange: (prefecture: Prefecture, isChecked: boolean) => void;
};

export const PrefectureCheckboxList: FC<PrefectureCheckboxListProps> = ({ prefectures, onCheckedChange, className, ...props }) => (
  <div
    className={twMerge(
      'flex h-[40vh] w-11/12 flex-wrap gap-5 overflow-y-scroll rounded-2xl p-5 shadow-inner scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500 md:h-auto md:overflow-auto md:p-0 md:shadow-none',
      className,
    )}
    {...props}
  >
    {prefectures.map((prefecture) => (
      <div key={prefecture.prefCode} className="flex items-center gap-3">
        <Checkbox.Root
          aria-label={`${prefecture.prefName} checkbox`}
          id={prefecture.prefCode.toString()}
          onCheckedChange={(checked) => {
            if (typeof checked === 'boolean') {
              onCheckedChange(prefecture, checked);
            }
          }}
        >
          <Checkbox.Indicator>
            <motion.figure
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              <BsCheck size={20} />
            </motion.figure>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor={prefecture.prefCode.toString()} className="min-w-[72px] text-lg">
          {prefecture.prefName}
        </label>
      </div>
    ))}
  </div>
);
