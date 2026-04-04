/**
 * Shared mock data for component tests.
 *
 * Provides typed AlbumData fixtures covering the key rendering branches:
 * - mockAlbumWithIframe    — full data, has an embedded iframe src
 * - mockAlbumWithoutIframe — has artwork but no iframe (renders static image)
 * - mockAlbumWithoutArtwork — no artwork and no iframe (renders placeholder)
 * - mockAlbums             — default array used in tests that need multiple albums
 */
import type { AlbumData } from '../types'

export const mockAlbumWithIframe: AlbumData = {
  id: 'test-album',
  artist: 'Test Artist',
  title: 'Test Album Title',
  artwork: 'https://example.com/artwork.jpg',
  tracklist: ['Track One', 'Track Two', 'Track Three'],
  description: [
    'First description paragraph.',
    'Second description paragraph.',
  ],
  credits: ['Credit One', 'Credit Two'],
  iframeSrc: 'https://example.com/embed',
  mediaLink: 'https://example.com/media',
}

export const mockAlbumWithoutIframe: AlbumData = {
  id: 'no-iframe-album',
  artist: 'Another Artist',
  title: 'No Iframe Album',
  artwork: 'https://example.com/artwork2.jpg',
  tracklist: ['Track A'],
  description: ['A description.'],
  credits: [],
  iframeSrc: '',
  mediaLink: '',
}

export const mockAlbumWithoutArtwork: AlbumData = {
  id: 'no-artwork-album',
  artist: 'No Artwork Artist',
  title: 'No Artwork Album',
  artwork: '',
  tracklist: [],
  description: [],
  credits: [],
  iframeSrc: '',
  mediaLink: '',
}

export const mockAlbums: AlbumData[] = [
  mockAlbumWithIframe,
  mockAlbumWithoutIframe,
]
