import { ComponentPropsWithoutRef, FC, useState } from 'react';
import { Card } from '@/common/component/card/card.presenter';
import type { PrefecturePopulationComposition } from '@/module/root/model/prefecture-population-composition.model';
import type { Prefecture } from '@/module/root/model/prefecture.model';
import { PrefectureCheckboxList } from '@/module/root/ui/component/prefecture-checkbox-list/prefecture-checkbox-list.presenter';
import { PrefecturePopulationCompositionGraph } from '@/module/root/ui/component/prefecture-population-composition-graph/prefecture-population-composition-graph.presenter';

export type RootProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  prefectureTotalPopulationCompositions: PrefecturePopulationComposition[];
};

export const Root: FC<RootProps> = ({ prefectureTotalPopulationCompositions, ...props }) => {
  const prefectures = prefectureTotalPopulationCompositions.map(
    (prefectureTotalPopulationComposition) => prefectureTotalPopulationComposition.prefecture,
  );
  const [prefecturesSelection, setPrefecturesSelection] = useState<{ prefecture: Prefecture; isChecked: boolean }[]>(
    prefectures.map((prefecture) => ({ prefecture, isChecked: false })),
  );

  return (
    <div className="flex flex-col items-center space-y-12" {...props}>
      <PrefectureCheckboxList
        prefectures={prefectureTotalPopulationCompositions.map(
          (prefectureTotalPopulationComposition) => prefectureTotalPopulationComposition.prefecture,
        )}
        onCheckedChange={(prefecture, isChecked) => {
          setPrefecturesSelection(
            prefecturesSelection.map((prefectureSelection) =>
              prefectureSelection.prefecture.prefCode === prefecture.prefCode ? { prefecture, isChecked } : prefectureSelection,
            ),
          );
        }}
      />
      <Card className="w-11/12 rounded-3xl drop-shadow-xl">
        <PrefecturePopulationCompositionGraph
          prefecturePopulationCompositions={prefectureTotalPopulationCompositions.filter((prefectureTotalPopulationComposition) =>
            prefecturesSelection.some(
              (prefectureSelection) =>
                prefectureSelection.prefecture.prefCode === prefectureTotalPopulationComposition.prefecture.prefCode && prefectureSelection.isChecked,
            ),
          )}
        />
      </Card>
    </div>
  );
};
