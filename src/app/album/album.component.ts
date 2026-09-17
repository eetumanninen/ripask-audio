import {Component, OnInit, inject} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album, Song} from "../subsonic/subsonic.model";
import {ActivatedRoute} from "@angular/router";
import {secondsToString} from "../helpers";
import {PlayerService} from "../player/player.service";
import {NgOptimizedImage} from "@angular/common";
import {SongListComponent} from "../song-list/song-list.component";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  imports: [
    NgOptimizedImage,
    SongListComponent
  ],
  styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
  private subsonicService = inject(SubsonicService);
  private playerService = inject(PlayerService);
  private router = inject(ActivatedRoute);

  album: Album | undefined;
  songs: Song[] = [];
  songCount = 0;
  duration = "";

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id") as string;
    this.subsonicService.getAlbum(id).subscribe((res) => {
      const {album, songs} = this.subsonicService.getAlbumAndSongs(res);
      this.album = album;
      this.songs = songs;
      this.songCount = songs.length;
      this.duration = secondsToString(
        songs.reduce((a, b) => a + b.duration, 0),
      );
    });
  }

  playSongs(): void {
    this.playerService.playSongs(this.songs);
  }
}
