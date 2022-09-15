import { Alert, Box, Button, Center, MantineColor } from '@mantine/core';
import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MemeCard from './MemeCard';
import SkeletonMemeCard from './SkeletonMemeCard';
import { useReaderSettings } from './readerSettings';
import { Meme } from './types';
import { useFetchMemePage } from './useFetchMemePage';

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
  const navigate = useNavigate();
  const store = useReaderSettings();
  const [data, error] = useFetchMemePage({
    slug,
    page,
    infiniteScroll: store.infiniteScroll,
  });

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

  const mapMemes = useCallback((meme: Meme) => {
    return <MemeCard key={meme.url} meme={meme} />;
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <Box sx={{ maxWidth: 600, margin: 'auto', paddingBottom: 50 }}>
        {data?.memes == null && error == null && <SkeletonMemeCard />}
        {error && (
          <Alert title="Error occured" color="red">
            {String(error)}
          </Alert>
        )}
        {data?.memes.map(mapMemes)}
        {data?.next_page_url && (
          <Center>
            <Button color={color} uppercase onClick={fetchNextPage}>
              Next page
            </Button>
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default Site;
