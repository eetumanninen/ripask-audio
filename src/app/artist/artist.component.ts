import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { SubsonicService } from "../subsonic/subsonic.service";
import { Album, Artist } from "../subsonic/subsonic.model";
import { ActivatedRoute } from "@angular/router";
import { PlayerService } from "../player/player.service";

@Component({
    selector: "app-artist",
    templateUrl: "./artist.component.html",
    styleUrls: ["./artist.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArtistComponent implements OnInit {
  private subsonicService = inject(SubsonicService);
  private playerService = inject(PlayerService);
  private router = inject(ActivatedRoute);

  artist: Artist | undefined;
  albums: Album[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id") as string;
    this.subsonicService.getArtist(id).subscribe((res) => {
      this.artist = res;
      this.albums = res.album;
    });
  }

  playArtist(): void {
    if (this.artist) {
      this.playerService.playArtist(this.artist.id);
    }
  }
}
