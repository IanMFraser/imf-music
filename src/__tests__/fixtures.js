export const mockAlbumWithIframe = {
  id: 'test-album',
  artist: 'Test Artist',
  title: 'Test Album Title',
  artwork: 'https://example.com/artwork.jpg',
  tracklist: ['Track One', 'Track Two', 'Track Three'],
  description: ['First description paragraph.', 'Second description paragraph.'],
  credits: ['Credit One', 'Credit Two'],
  iframeSrc: 'https://example.com/embed',
  mediaLink: 'https://example.com/media',
}

export const mockAlbumWithoutIframe = {
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

export const mockAlbums = [mockAlbumWithIframe, mockAlbumWithoutIframe]
