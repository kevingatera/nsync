import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongPlay, SongsResponse } from '@nsync/data';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: SongPlay[];
  listenedSongs: SongPlay[];

  constructor(private http: HttpClient) { 
    this.fetchSongs();
    this.fetchMultiListenedSongs(false);
  }

  fetchSongs(): void {
    this.http.get<SongsResponse>('/songs').subscribe(response => {
      this.songs = response.songPlays;
    });
  }

  fetchMultiListenedSongs(dupsAllowed): void {
    this.http.get<SongsResponse>('/songs/listened').subscribe(response => {
      
      let listened: SongPlay[];
      
      // Remove duplicates
      if(dupsAllowed) {
        listened = response.songPlays;
      } else {
        listened = [ ...new Set(response.songPlays) ];
      }
      
      this.listenedSongs = listened;
    });
  }

}
