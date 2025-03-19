// css で利用する画像を import する
import { getImage } from 'astro:assets';
/**
 * 1. ここに背景画像を定義する
 * 2. scssファイルの中でCSS変数として使用する
 */
import imageHeaderPc from '@/assets/images/index/bg_01.jpg';
import imageHeaderMobile from '@/assets/images/index/bg_02.jpg';

// ... それを名前を付けて参照できるようにする。
// `header_desktop` => `--imgurl-header-desktop` で参照
const imageMap = {
  header_desktop: imageHeaderPc,　// --imgurl-header-desktop
  header_mobile: imageHeaderMobile,　// --imgurl-footer-desktop
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