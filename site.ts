/**
 * サブディレクトリに対応させる場合は,ここに任意のパスを指定する
 */
export const BASE_DIR = "/";
/**
 * ビルド環境の制御
 */
export const MODE = process.env.MODE as  'development' | 'staging' | 'production';

export const SITE_CONFIG = {
  WEB_SITE_NAME: "これはサイト名です",
  WEB_SITE_DESCRIPTION: "これはサイトディスクリプションです",
  WEB_SITE_KEYWORDS: "",
  WEB_AUTHOR: "これは作成者です",
  WEB_MODIFIER: "これは編集者です",
  SITE_URL: {
    DEV: "http://localhost:4321",
    STG: "https://example.stg.com",
    PROD: "https://example.com"
  },
  BASE_DIR,
  ABSOLUTE_DIR: false,
  ASSETS_DIR: BASE_DIR + "assets",
  OUT_DIR: "./dist" + BASE_DIR,
  LOCAL_SERVER: {
    API: false,
    GIT: false
  },
  ASSETS_HOST: "",
  CACHE_VERSION: "",
  HTTPS_SERVER: false,
  MINIFY: false,
  PURGE_CSS: false,
  SITE_MAP: false
}