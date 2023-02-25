import { resasClient } from '@yumemi-exam/resas-api';
import type { GetPrefecturesInterface } from '@/module/root/repository/get-prefectures.repository';

export const getPrefectures: GetPrefecturesInterface = async () => {
  const { result: prefectures } = await resasClient.getPrefectures();

  return prefectures;
};
