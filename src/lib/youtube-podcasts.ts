export interface YoutubePodcast {
  name: string;
  handle: string;
  url: string;
  description: string;
  topics: string[];
}

export const YOUTUBE_PODCASTS: YoutubePodcast[] = [
  {
    name: "Lex Fridman Podcast",
    handle: "@lexfridman",
    url: "https://www.youtube.com/@lexfridman/videos",
    description: "Long-form conversations on AI, science, and the human mind.",
    topics: ["AI", "Science"],
  },
  {
    name: "Huberman Lab",
    handle: "@hubermanlab",
    url: "https://www.youtube.com/@hubermanlab/videos",
    description: "Neuroscience and protocols for everyday performance and health.",
    topics: ["Health", "Science"],
  },
  {
    name: "All-In Podcast",
    handle: "@allin",
    url: "https://www.youtube.com/@allin/videos",
    description: "Tech, economics, politics and poker with four investor besties.",
    topics: ["Business", "Tech"],
  },
  {
    name: "The Diary Of A CEO",
    handle: "@TheDiaryOfACEO",
    url: "https://www.youtube.com/@TheDiaryOfACEO/videos",
    description: "Steven Bartlett interviews leaders and culture-shapers.",
    topics: ["Business"],
  },
  {
    name: "Acquired",
    handle: "@AcquiredFM",
    url: "https://www.youtube.com/@AcquiredFM/videos",
    description: "Deep-dive stories of the companies that built the modern world.",
    topics: ["Business", "Tech"],
  },
  {
    name: "Modern Wisdom",
    handle: "@ChrisWillx",
    url: "https://www.youtube.com/@ChrisWillx/videos",
    description: "Chris Williamson on life, philosophy, fitness, and culture.",
    topics: ["Self-improvement"],
  },
  {
    name: "This Past Weekend (Theo Von)",
    handle: "@TheoVon",
    url: "https://www.youtube.com/@TheoVon/videos",
    description: "Long-form interviews and storytelling with comedian Theo Von.",
    topics: ["Comedy"],
  },
  {
    name: "Flagrant",
    handle: "@FLAGRANT",
    url: "https://www.youtube.com/@FLAGRANT/videos",
    description: "Andrew Schulz and friends — comedy, current events, debates.",
    topics: ["Comedy"],
  },
  {
    name: "The Tim Ferriss Show",
    handle: "@timferriss",
    url: "https://www.youtube.com/@timferriss/videos",
    description: "Deconstructing world-class performers across every field.",
    topics: ["Self-improvement", "Business"],
  },
  {
    name: "a16z",
    handle: "@a16z",
    url: "https://www.youtube.com/@a16z/videos",
    description: "Andreessen Horowitz on technology, startups, and the future.",
    topics: ["Tech", "Startups"],
  },
  {
    name: "Y Combinator",
    handle: "@ycombinator",
    url: "https://www.youtube.com/@ycombinator/videos",
    description: "Startup advice, founder interviews, and YC programming talks.",
    topics: ["Startups"],
  },
  {
    name: "Dwarkesh Podcast",
    handle: "@DwarkeshPatel",
    url: "https://www.youtube.com/@DwarkeshPatel/videos",
    description: "Deep technical conversations with AI researchers and thinkers.",
    topics: ["AI"],
  },
];
