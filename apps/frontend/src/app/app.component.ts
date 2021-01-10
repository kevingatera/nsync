import { Component } from '@angular/core';
import { SongPlayStats } from '@nsync/data';
import { SongsService } from './services/songs.service';

@Component({
  selector: "nsync-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "frontend";

  constructor(private songService: SongsService) {}

  getSongs() {
    return this.songService.songs;
  }

  getMultiListenSongs() {
    
    // Flush out dusplicates
    return this.songService.listenedSongs.sort(      
      (a, b) => b.msPlayed - a.msPlayed    
    );
  }

  getStatsByTrackName() {
    const results: SongPlayStats[] = [];

    let uniqueSongs = this.songService.listenedSongs;

    uniqueSongs = uniqueSongs.filter(
      (arr, index, self) =>
        index === self.findIndex((t) => t.trackName === arr.trackName)
    );

    for (const index in uniqueSongs) {
      const timesPlayed = this.getCountByTrackName(
        this.songService.listenedSongs,
        uniqueSongs[index].trackName
      );
      if(timesPlayed > 1) {
        results.push({ timesPlayed, songPlay: uniqueSongs[index] });
      }
    }

    console.log(results);

    return results;

  }

  private getCountByTrackName(arr, group) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trackName == group) {
        count++;
      }
    }
    return count;
  }


  getStatsByArtistName() {
    const results: SongPlayStats[] = [];

    let uniqueSongs = this.songService.listenedSongs;

    uniqueSongs = uniqueSongs.filter(
      (arr, index, self) =>
        index === self.findIndex((t) => t.artistName === arr.artistName)
    );

    for (const index in uniqueSongs) {
      const timesPlayed = this.getCountByArtistName(
        this.songService.listenedSongs,
        uniqueSongs[index].artistName
      );
      if(timesPlayed > 1) {
        results.push({ timesPlayed, songPlay: uniqueSongs[index] });
      }
    }

    console.log(results);

    return results;

  }

  private getCountByArtistName(arr, group) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].artistName == group) {
        count++;
      }
    }
    return count;
  }
}
