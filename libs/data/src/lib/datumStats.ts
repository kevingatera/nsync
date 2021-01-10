import { SongPlay } from "./data";

export interface SongStatsResponse {
  songPlays: SongPlayStats[];
}

export interface SongPlayStats {
  songPlay: SongPlay;
  timesPlayed: number;
  // secPlayed: number;
}
