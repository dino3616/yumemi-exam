import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { BsCheck } from 'react-icons/bs';
import { Checkbox } from '@/common/component/checkbox/checkbox.presenter';
import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';

export type RootProps = ComponentPropsWithoutRef<'div'> & {
  prefecturePopulationCompositions: PrefecturePopulationComposition[];
};

export const Root: FC<RootProps> = ({ prefecturePopulationCompositions, ...props }) => {
  return (
    <div {...props}>
      {prefecturePopulationCompositions.map((prefecturePopulationComposition) => (
        <div key={prefecturePopulationComposition.prefecture.prefCode.toString()} className="flex items-center gap-3">
          <Checkbox.Root
            aria-label={`${prefecturePopulationComposition.prefecture.prefName} checkbox`}
            id={prefecturePopulationComposition.prefecture.prefCode.toString()}
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
          <label htmlFor={prefecturePopulationComposition.prefecture.prefCode.toString()} className="text-lg">
            {prefecturePopulationComposition.prefecture.prefName}
          </label>
        </div>
      ))}
    </div>
  );
};
