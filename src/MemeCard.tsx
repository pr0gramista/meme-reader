import { Carousel } from '@mantine/carousel';
import { Box, Title, Group, Image } from '@mantine/core';
import { useReaderSettings } from './readerSettings';
import { Meme } from './types';

export interface MemeCardProps {
  meme: Meme;
  showTitle?: boolean;
}

const MemeCard = ({ meme, showTitle = true }: MemeCardProps) => {
  const autoplay = useReaderSettings().autoplay;

  return (
    <Box sx={{ marginBottom: 12 }}>
      {meme.title && showTitle && (
        <Title order={3} sx={{ marginBottom: 4 }}>
          {meme.title}
        </Title>
      )}
      <Box sx={{ marginBottom: 4 }}>
        {meme.content.contentType === 'IMAGE' && (
          <Image src={meme.content.url} />
        )}
        {meme.content.contentType === 'TEXT' && <div>{meme.content.text}</div>}
        {meme.content.contentType === 'GALLERY' && (
          <Carousel mx="auto" withIndicators>
            {meme.content.urls.map((url) => (
              <Carousel.Slide key={url}>
                <Image src={url} />
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
        {meme.content.contentType === 'VIDEO' && (
          <video
            src={meme.content.url}
            muted
            loop
            autoPlay={autoplay}
            playsInline
            controls
            style={{ width: '100%' }}
          />
        )}
      </Box>
      <Group grow position="apart" sx={{ fontSize: 14 }}>
        {meme.comment_count && (
          <Box sx={{ color: 'inherit' }} component="a" href={meme.url}>
            Comments: {meme.comment_count}
          </Box>
        )}
        <Box sx={{ flex: 0, color: 'inherit' }} component="a" href={meme.url}>
          Source
        </Box>
      </Group>
    </Box>
  );
};

export default MemeCard;
