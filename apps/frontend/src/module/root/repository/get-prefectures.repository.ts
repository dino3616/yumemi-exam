import type { Prefecture } from '@/module/root/model/prefecture.model';

export type GetPrefecturesOutput = Prefecture[];

export type GetPrefecturesInterface = () => Promise<GetPrefecturesOutput>;
