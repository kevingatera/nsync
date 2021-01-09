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

}
