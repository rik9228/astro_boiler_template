// css で利用する画像を import する
import { getImage } from 'astro:assets';
/**
 * 1. ここに背景画像を定義する
 * 2. scssファイルの中でCSS変数として使用する
 */
import imageFooterBlue from '@/assets/images/bg_01.jpg';
import imageFooterGreen from '@/assets/images/bg_02.jpg';
import imageHeaderBlue from '@/assets/images/bg_03.jpg';

// ... それを名前を付けて参照できるようにする。
// `header_desktop` => `--imgurl-header-desktop` で参照
const imageMap = {
  header_desktop: imageHeaderBlue,　// --imgurl-header-desktop
  footer_desktop: imageFooterBlue,　// --imgurl-footer-desktop
  footer_mobile: imageFooterGreen,　// --imgurl-footer-mobile
} as Record<string, ImageMetadata>;

export const imagePath = async (src: ImageMetadata, type = 'webp') => (await getImage({ src, format: type })).src;

export const images = await (async () => (
  await Promise.all(
    Object.entries(imageMap)
      .map(async ([key, src]) => [key, await imagePath(src)])
    )
  ).reduce((acc, [key, path]) => (
    { ...acc, [`imgurl-${key.replace(/_/g, '-')}`]: `url(${path})` }),
    {},
  ))();