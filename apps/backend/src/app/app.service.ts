import { Injectable } from "@nestjs/common";
import songPlays from "../assets/andrews-playlist.json";
import { SongPlay } from "@nsync/data";

@Injectable()
export class AppService {
  private songsPlayed: SongPlay[];

  constructor() {
    // var result: SongPlay[];

    // Format all songs's time played from milli to secs
    for (var i = 0; i < songPlays.length; i++) {
      songPlays[i].msPlayed = Math.floor((songPlays[i].msPlayed / 1000) % 60);
    }
    // this.songsPlayed = results;

    this.songsPlayed = songPlays;
  }

  getSongsPlayed(): SongPlay[] {
    return this.songsPlayed;
  }

  getGreatestSongsOfAllTime(): SongPlay[] {
    return this.songsPlayed.filter(
      (song) => song.trackName === "Kiss from a Rose"
    );
  }

  getListened(): SongPlay[] {
    // Listened songs are those that have beeen listened to for more than 1 second or 1000ms
    return this.songsPlayed.filter((song) => song.msPlayed > 1);
  }

  getByBand(bandName): SongPlay[] {
    // Songs are those that have a similar band/artist name
    return this.songsPlayed.filter((song) => song.artistName.match(bandName));
  }
}
