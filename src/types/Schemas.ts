import type { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

type Content<T> = T & MicroCMSDate & MicroCMSContentId;

// blogs definition
type BlogContent = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  tags: Tag[];
  author: string[];
};
type Blog = Content<BlogContent>;

// tags definition
type TagCotent = {
  name: string;
};
type Tag = Content<TagCotent>;

/**
 * @property {Blog} Blog - ブログの型
 * @property {Tag} Tag - タグの型
 */
export type Schemas = {
  Blog: Blog;
  Tag: Tag;
};
