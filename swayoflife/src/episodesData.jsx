// In a file named episodesData.js

export const episodes = [
  {
    id: 1,
    title: "From the Valley",
    theme: "Letting Go",
    videoSrc: "episode1.mp4",
    timeline: [
      { timestamp: "0:05", explanation: "Here the dandelion means hope." },
      { timestamp: "0:12", explanation: "A shift in the wind signals a new path." }
    ]
  },
  {
    id: 2,
    title: "From the Lake",
    theme: "Letting Go",
    videoSrc: " episode2.mp4",
    timeline: [
      { timestamp: "0:05", explanation: "Here the dandelion means hope." },
      { timestamp: "0:12", explanation: "A shift in the wind signals a new path." }
    ]
  },

  {
    id: 3,
    title: "From the City",
    theme: "Letting Go",
    videoSrc: "/videos/episode_01.mp4",
    timeline: [
      { timestamp: "0:05", explanation: "Here the dandelion means hope." },
      { timestamp: "0:12", explanation: "A shift in the wind signals a new path." }
    ]
  },

  {
    id: 4,
    title: "To the Home",
    theme: "Letting Go",
    videoSrc: "/videos/episode_01.mp4",
    timeline: [
      { timestamp: "0:05", explanation: "Here the dandelion means hope." },
      { timestamp: "0:12", explanation: "A shift in the wind signals a new path." }
    ]
  },
  // ...and so on for the other episodes
];

export default episodes;