import { Inconsolata, Noto_Sans_JP } from '@next/font/google';

const inconsolata = Inconsolata({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const fontFamily = [inconsolata, notoSansJp].map((font) => font.variable).join(' ');
