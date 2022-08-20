import { Carousel } from "@mantine/carousel";
import { Box, Title, Group, Image } from "@mantine/core";
import React from "react";
import { Meme } from "./types";

export interface MemeCardProps {
  meme: Meme;
}

const MemeCard = ({ meme }: MemeCardProps) => {
  return (
    <Box sx={{ marginBottom: 12 }}>
      {meme.title && <Title order={4}>{meme.title}</Title>}
      {meme.content.contentType === "IMAGE" && <Image src={meme.content.url} />}
      {meme.content.contentType === "GALLERY" && (
        <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators>
          {meme.content.urls.map((url) => (
            <Carousel.Slide key={url}>
              <Image src={url} />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
      {meme.content.contentType === "VIDEO" && (
        <video
          src={meme.content.url}
          muted
          loop
          autoPlay
          playsInline
          controls
          style={{ width: "100%" }}
        />
      )}
      <Group>
        {meme.comment_count}
        {meme.points}
      </Group>
    </Box>
  );
};

export default MemeCard;
