import { Box, LoadingOverlay } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import { Meme, Page, PageZod } from './types';

export type SiteSlug =
  | 'kwejk'
  | 'jbzd'
  | '9gag'
  | '9gagnsfw'
  | 'ifunnyco'
  | 'mistrzowie'
  | 'demotywatory'
  | 'anonimowe';

export interface SiteProps {
  slug: SiteSlug;
  page?: string;
}

const Site = ({ slug, page }: SiteProps) => {
  const [data, setData] = useState<Page>();

  useEffect(() => {
    setData(undefined);

    let url = `https://api.12345.pl/${slug}`;
    if (page != null) {
      url += `/page/${page}`;
    }

    let cancelled = false;

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;

        const result = PageZod.safeParse(json);

        if (result.success) {
          setData(result.data);
        } else {
          console.error(result.error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug, page]);

  const mapMemes = useCallback((meme: Meme) => {
    return <MemeCard key={meme.url} meme={meme} />;
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <Box sx={{ maxWidth: 500, margin: 'auto' }}>
        {data?.memes.map(mapMemes)}
      </Box>
      <LoadingOverlay transitionDuration={500} visible={data == null} />
    </Box>
  );
};

export default Site;
