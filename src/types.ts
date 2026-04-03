export interface NewsItem {
  id: string
  date: string
  category: string
  categoryVariant: string
  content: string
  link: string
}

export interface CurrentNews {
  title: string
  date: string
  category: string
  images: string
  alt: string
  content: string
  link: string
}

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
