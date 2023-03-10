import Head from 'next/head';
import type { FC } from 'react';
import { MetaKey } from '@/common/constant/meta-key.constant';

export type MetaProps = {
  title: string;
  hostname: string;
};

export const Meta: FC<MetaProps> = ({ title, hostname }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" key={MetaKey.ICON} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key={MetaKey.VIEWPORT} />
    <meta name="description" content="Yumemi Inc. coding exam." key={MetaKey.DESCRIPTION} />
    <meta property="og:type" content="website" key={MetaKey.OG_TYPE} />
    <meta property="og:title" content={title} key={MetaKey.OG_TITLE} />
    <meta property="og:description" content="Yumemi Inc. coding exam." key={MetaKey.OG_DESCRIPTION} />
    <meta property="og:url" content={`https://${hostname}`} key={MetaKey.OG_URL} />
    <meta property="og:site_name" content="Yumemi Inc. coding exam @ shio" key={MetaKey.OG_SITE_NAME} />
    <meta property="og:image" content={`https://${hostname}/ogp.png`} key={MetaKey.OG_IMAGE} />
    <meta name="twitter:card" content="summary_large_image" key={MetaKey.TWITTER_CARD} />
    <meta name="twitter:site" content="@shio3616" key={MetaKey.TWITTER_SITE} />
  </Head>
);
