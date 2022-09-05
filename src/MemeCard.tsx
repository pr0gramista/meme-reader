import { Carousel } from '@mantine/carousel';
import { Box, Title, Group, Image } from '@mantine/core';
import { Meme } from './types';

export interface MemeCardProps {
  meme: Meme;
}

const MemeCard = ({ meme }: MemeCardProps) => {
  return (
    <Box sx={{ marginBottom: 12 }}>
      {meme.title && (
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
            autoPlay
            playsInline
            controls
            style={{ width: '100%' }}
          />
        )}
      </Box>
      <Group grow position="apart" sx={{ fontSize: 14 }}>
        {meme.comment_count && <Box>Comments: {meme.comment_count}</Box>}
        <Box sx={{ flex: 0, color: 'inherit' }} component="a" href={meme.url}>
          Source
        </Box>
      </Group>
    </Box>
  );
};

export default MemeCard;
