"use client";

import { useCallback, useEffect, useState } from "react";

interface PodcastSummary {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
  feedUrl: string | null;
  episodeCount: number | null;
  genre: string | null;
  releaseDate: string | null;
  itunesUrl: string | null;
}

interface TopPodcastSummary {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
  itunesUrl: string | null;
  genre: string | null;
  releaseDate: string | null;
}

const TOP_COUNTRIES: { code: string; label: string }[] = [
  { code: "us", label: "United States" },
  { code: "gb", label: "United Kingdom" },
  { code: "cn", label: "China" },
  { code: "tw", label: "Taiwan" },
  { code: "hk", label: "Hong Kong" },
  { code: "jp", label: "Japan" },
  { code: "kr", label: "Korea" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "ca", label: "Canada" },
  { code: "au", label: "Australia" },
];

interface PodcastDetail {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
}

interface EpisodeSummary {
  id: string;
  title: string;
  description: string;
  releaseDate: string | null;
  durationMs: number | null;
  audioUrl: string | null;
  episodeUrl: string | null;
  artworkUrl: string | null;
}

function formatDuration(ms: number | null): string {
  if (!ms || ms <= 0) return "—";
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatReleaseDate(value: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

export default function PodcastSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PodcastSummary[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [selectedPodcast, setSelectedPodcast] = useState<
    PodcastSummary | PodcastDetail | TopPodcastSummary | null
  >(null);
  const [episodes, setEpisodes] = useState<EpisodeSummary[]>([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(false);
  const [episodesError, setEpisodesError] = useState<string | null>(null);

  const [topCountry, setTopCountry] = useState("us");
  const [topPodcasts, setTopPodcasts] = useState<TopPodcastSummary[]>([]);
  const [loadingTop, setLoadingTop] = useState(false);
  const [topError, setTopError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const loadTop = async () => {
      setLoadingTop(true);
      setTopError(null);
      try {
        const res = await fetch(
          `/api/podcasts/top?country=${encodeURIComponent(topCountry)}&limit=24`
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || `Failed (${res.status})`);
        }
        if (!cancelled) {
          setTopPodcasts((data.results ?? []) as TopPodcastSummary[]);
        }
      } catch (error) {
        if (!cancelled) {
          setTopPodcasts([]);
          setTopError(
            error instanceof Error
              ? error.message
              : "Failed to load recommendations."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingTop(false);
        }
      }
    };
    void loadTop();
    return () => {
      cancelled = true;
    };
  }, [topCountry]);

  const runSearch = useCallback(async (term: string) => {
    if (!term.trim()) return;
    setSearching(true);
    setSearchError(null);
    setHasSearched(true);
    try {
      const res = await fetch(
        `/api/podcasts/search?term=${encodeURIComponent(term.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || `Search failed (${res.status})`);
      }
      setResults((data.results ?? []) as PodcastSummary[]);
    } catch (error) {
      setResults([]);
      setSearchError(
        error instanceof Error ? error.message : "Failed to search podcasts."
      );
    } finally {
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    if (!selectedPodcast) {
      setEpisodes([]);
      setEpisodesError(null);
      return;
    }

    let cancelled = false;
    const loadEpisodes = async () => {
      setLoadingEpisodes(true);
      setEpisodesError(null);
      try {
        const res = await fetch(
          `/api/podcasts/${encodeURIComponent(selectedPodcast.id)}/episodes?limit=50`
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || `Failed (${res.status})`);
        }
        if (!cancelled) {
          setEpisodes((data.episodes ?? []) as EpisodeSummary[]);
        }
      } catch (error) {
        if (!cancelled) {
          setEpisodes([]);
          setEpisodesError(
            error instanceof Error
              ? error.message
              : "Failed to load episodes."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingEpisodes(false);
        }
      }
    };

    void loadEpisodes();
    return () => {
      cancelled = true;
    };
  }, [selectedPodcast]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void runSearch(query);
  };

  if (selectedPodcast) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedPodcast(null)}
          className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          ← Back to search results
        </button>

        <div className="flex gap-5 items-start">
          {selectedPodcast.artworkUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={selectedPodcast.artworkUrl}
              alt={selectedPodcast.title}
              className="w-32 h-32 rounded-lg object-cover border border-zinc-800"
            />
          )}
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-semibold text-white">
              {selectedPodcast.title}
            </h2>
            <p className="text-zinc-400 mt-1">{selectedPodcast.author}</p>
            {"feedUrl" in selectedPodcast && selectedPodcast.feedUrl && (
              <p className="text-xs text-zinc-500 mt-2 break-all">
                Feed: {selectedPodcast.feedUrl}
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-3">
            Episodes
          </h3>

          {loadingEpisodes && (
            <div className="text-zinc-500 text-sm py-8 text-center">
              Loading episodes…
            </div>
          )}

          {episodesError && !loadingEpisodes && (
            <div className="text-red-400 text-sm py-4">{episodesError}</div>
          )}

          {!loadingEpisodes && !episodesError && episodes.length === 0 && (
            <div className="text-zinc-500 text-sm py-8 text-center">
              No episodes found for this podcast.
            </div>
          )}

          <ul className="space-y-2">
            {episodes.map((episode) => (
              <li
                key={episode.id}
                className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-medium">{episode.title}</h4>
                    <div className="flex gap-3 text-xs text-zinc-500 mt-1">
                      {episode.releaseDate && (
                        <span>{formatReleaseDate(episode.releaseDate)}</span>
                      )}
                      <span>{formatDuration(episode.durationMs)}</span>
                    </div>
                    {episode.description && (
                      <p className="text-sm text-zinc-400 mt-2 line-clamp-3">
                        {stripHtml(episode.description)}
                      </p>
                    )}
                  </div>
                  {episode.episodeUrl && (
                    <a
                      href={episode.episodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-400 hover:text-white whitespace-nowrap"
                    >
                      Open ↗
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search podcasts (e.g. 'Lex Fridman', 'tech news')"
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
        />
        <button
          type="submit"
          disabled={searching || !query.trim()}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 disabled:text-zinc-400 text-white text-sm font-medium transition-colors"
        >
          {searching ? "Searching…" : "Search"}
        </button>
      </form>

      {searchError && (
        <div className="text-red-400 text-sm">{searchError}</div>
      )}

      {!searchError && hasSearched && !searching && results.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p className="text-lg">No podcasts found</p>
          <p className="text-sm mt-1">Try a different search term.</p>
        </div>
      )}

      {!hasSearched && !searching && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
                Top podcasts
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Trending shows from Apple Podcasts charts.
              </p>
            </div>
            <select
              value={topCountry}
              onChange={(event) => setTopCountry(event.target.value)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-600"
            >
              {TOP_COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          {loadingTop && (
            <div className="text-center py-12 text-zinc-500 text-sm">
              Loading recommendations…
            </div>
          )}

          {topError && !loadingTop && (
            <div className="text-red-400 text-sm">{topError}</div>
          )}

          {!loadingTop && !topError && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {topPodcasts.map((podcast, index) => (
                <li key={podcast.id}>
                  <button
                    onClick={() => setSelectedPodcast(podcast)}
                    className="w-full text-left rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
                  >
                    <div className="relative aspect-square bg-zinc-800">
                      {podcast.artworkUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={podcast.artworkUrl}
                          alt={podcast.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="p-3">
                      <div className="text-white text-sm font-medium line-clamp-2">
                        {podcast.title}
                      </div>
                      <div className="text-xs text-zinc-400 truncate mt-1">
                        {podcast.author}
                      </div>
                      {podcast.genre && (
                        <div className="text-xs text-zinc-500 mt-1">
                          {podcast.genre}
                        </div>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {results.map((podcast) => (
          <li key={podcast.id}>
            <button
              onClick={() => setSelectedPodcast(podcast)}
              className="w-full text-left flex gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
            >
              {podcast.artworkUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={podcast.artworkUrl}
                  alt={podcast.title}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-16 h-16 rounded bg-zinc-800 flex-shrink-0" />
              )}
              <div className="min-w-0 flex-1">
                <div className="text-white font-medium truncate">
                  {podcast.title}
                </div>
                <div className="text-sm text-zinc-400 truncate">
                  {podcast.author}
                </div>
                <div className="text-xs text-zinc-500 mt-1 flex gap-2">
                  {podcast.genre && <span>{podcast.genre}</span>}
                  {podcast.episodeCount !== null && (
                    <span>· {podcast.episodeCount} eps</span>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
