/**
 * Shared TypeScript interfaces used across the application.
 *
 * Data shapes mirror the JSON structures in src/data/news.json
 * and src/data/albums.json.
 */

/** A single archived news item from the `oldNews` array in news.json. */
export interface NewsItem {
  id: string
  date: string
  category: string
  categoryVariant: string
  content: string
  link: string
}

/** The featured current news item from the `currentNews` key in news.json. */
export interface CurrentNews {
  title: string
  date: string
  category: string
  images: string
  alt: string
  content: string
  link: string
}

/** A single album entry from albums.json. */
export interface AlbumData {
  id: string
  artist: string
  title: string
  artwork: string
  tracklist: string[]
  description: string[]
  credits: string[]
  iframeSrc: string
  mediaLink: string
}
