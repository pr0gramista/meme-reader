import {
  Box,
  Button,
  Center,
  LoadingOverlay,
  MantineColor,
} from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MemeCard from './MemeCard';
import { useBearStore } from './store';
import { Meme, Page, PageZod } from './types';

const LOAD_WITHIN = 1200;

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
  color: MantineColor;
}

const Site = ({ slug, color }: SiteProps) => {
  const { page } = useParams();
  const [data, setData] = useState<Page>();
  const navigate = useNavigate();
  const store = useBearStore();

  const fetchNextPage = useCallback(() => {
    if (!store.infiniteScroll) {
      window.scrollTo(0, 0);
    }

    if (data != null && data.next_page_url) {
      navigate(data?.next_page_url);
    }
  }, [store.infiniteScroll, data, navigate]);

  useEffect(() => {
    const listener = () => {
      if (store.infiniteScroll) {
        const height = document.body.clientHeight;
        const scrolledBottomPointY = window.innerHeight + window.scrollY;
        if (height - scrolledBottomPointY < LOAD_WITHIN) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [store.infiniteScroll, fetchNextPage]);

  useEffect(() => {
    if (!store.infiniteScroll) {
      setData(undefined);
    }

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
          if (store.infiniteScroll) {
            setData((data) => ({
              memes: [...(data?.memes ?? []), ...result.data.memes],
              next_page_url: result.data.next_page_url,
              title: result.data.title,
            }));
          } else {
            setData(result.data);
          }
        } else {
          console.error(result.error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug, page, store.infiniteScroll]);

  const mapMemes = useCallback((meme: Meme) => {
    return <MemeCard key={meme.url} meme={meme} />;
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <Box sx={{ maxWidth: 500, margin: 'auto', paddingBottom: 50 }}>
        {data?.memes.map(mapMemes)}
        {data?.next_page_url && (
          <Center>
            <Button color={color} uppercase onClick={fetchNextPage}>
              Next page
            </Button>
          </Center>
        )}
      </Box>
      <LoadingOverlay
        transitionDuration={500}
        visible={data == null && !store.infiniteScroll}
      />
    </Box>
  );
};

export default Site;
