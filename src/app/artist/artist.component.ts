import {Component, OnInit, inject, signal} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album, Artist} from "../subsonic/subsonic.model";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../player/player.service";
import {AlbumListComponent} from "../album-list/album-list.component";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  imports: [
    AlbumListComponent
  ],
  styleUrls: ["./artist.component.scss"]
})
export class ArtistComponent implements OnInit {
  private subsonicService = inject(SubsonicService);
  private playerService = inject(PlayerService);
  private router = inject(ActivatedRoute);

  artist = signal<Artist | undefined>(undefined);
  albums = signal<Album[]>([]);

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id") as string;
    this.subsonicService.getArtist(id).subscribe((res) => {
      this.artist.set(res);
      this.albums.set(res.album);
    });
  }

  playArtist(): void {
    const artistUnwrapped = this.artist();
    if (artistUnwrapped) {
      this.playerService.playArtist(artistUnwrapped.id);
    }
  }
}
