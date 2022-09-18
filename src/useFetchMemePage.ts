import { useEffect, useRef, useState } from 'react';
import { Page, PageZod } from './types';

export const useFetchMemePage = ({
  slug,
  infiniteScroll,
  page,
}: {
  slug: string;
  infiniteScroll?: boolean;
  page?: string;
}) => {
  // Keep last slug so we can detect when user changes the site
  const lastSlugRef = useRef<string>();
  const [data, setData] = useState<Page>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    // Clear data when not using infinite scroll or the site has changed
    if (!infiniteScroll || slug !== lastSlugRef.current) {
      setData(undefined);
      setError(undefined);
    }

    let url = `https://api.12345.pl/${slug}`;
    if (page != null) {
      url += `/page/${page}`;
    }

    let cancelled = false;
    lastSlugRef.current = slug;

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;

        const result = PageZod.safeParse(json);

        if (result.success) {
          if (infiniteScroll) {
            setData((data) => ({
              memes: [...(data?.memes ?? []), ...result.data.memes],
              next_page_url: result.data.next_page_url,
              title: result.data.title,
            }));
          } else {
            setData(result.data);
          }
        } else {
          setError(result.error);
          console.error(result.error);
        }
      })
      .catch((e) => {
        if (cancelled) return;

        setError(e);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, page, infiniteScroll]);

  return [data, error] as [Page | null, Error | null];
};
