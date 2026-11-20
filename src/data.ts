export interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

export const initialTracks: Track[] = [
  {
    id: 1,
    title: "Название твоего трека 1",
    artist: "Исполнитель 1",
    cover: "/images/track1.jpg",
    audioUrl: "/music/track1.mp3"
  },
  {
    id: 2,
    title: "Название твоего трека 2",
    artist: "Исполнитель 2",
    cover: "/images/track2.jpg",
    audioUrl: "/music/track2.mp3"
  },
  {
    id: 3,
    title: "Название твоего трека 3",
    artist: "Исполнитель 3",
    cover: "/images/track3.jpg",
    audioUrl: "/music/track3.mp3"
  },
  {
    id: 4,
    title: "Название твоего трека 4",
    artist: "Исполнитель 4",
    cover: "/images/track4.jpg",
    audioUrl: "/music/track4.mp3"
  }
];