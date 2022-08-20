import { z } from "zod";

const AuthorZod = z.object({
  name: z.string(),
  url: z.string(),
});

const TagZod = z.object({
  name: z.string(),
  url: z.string(),
});

const ImageContentZod = z.object({
  contentType: z.literal("IMAGE"),
  url: z.string(),
});

const VideoContentZod = z.object({
  contentType: z.literal("VIDEO"),
  url: z.string(),
});

const GalleryContentZod = z.object({
  contentType: z.literal("GALLERY"),
  urls: z.array(z.string()),
});

const TextContentZod = z.object({
  contentType: z.literal("TEXT"),
  text: z.string(),
});

const ContentZod = z.discriminatedUnion("contentType", [
  ImageContentZod,
  VideoContentZod,
  GalleryContentZod,
  TextContentZod,
]);

export const MemeZod = z.object({
  author: AuthorZod.nullable(),
  comment_count: z.number().nullable(),
  points: z.number().nullable(),
  title: z.string().nullable(),
  url: z.string(),
  view_url: z.string(),
  tags: z.array(TagZod).nullable(),
  content: ContentZod,
});

export type Meme = z.infer<typeof MemeZod>;

export const PageZod = z.object({
  title: z.string().nullable(),
  next_page_url: z.string(),
  memes: z.array(MemeZod),
});

export type Page = z.infer<typeof PageZod>;
