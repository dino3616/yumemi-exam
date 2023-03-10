import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Card } from '@/common/component/card/card.presenter';

type Story = ComponentStoryObj<typeof Card>;

const meta: ComponentMeta<typeof Card> = {
  component: Card,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

export const PlainText: Story = {
  render: (args) => (
    <Card {...args} className="font-code">
      あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      <br />
      またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
    </Card>
  ),
};
