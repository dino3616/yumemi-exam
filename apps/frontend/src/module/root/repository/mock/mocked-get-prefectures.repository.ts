import { mockedPrefecture1, mockedPrefecture2, mockedPrefecture3 } from '@/module/root/model/mock/mocked-prefecture.model';
import type { GetPrefecturesInterface, GetPrefecturesOutput } from '@/module/root/repository/get-prefectures.repository';

export const mockedGetPrefectures1: GetPrefecturesInterface = async () => {
  const output: GetPrefecturesOutput = [mockedPrefecture1, mockedPrefecture2, mockedPrefecture3];

  return output;
};
