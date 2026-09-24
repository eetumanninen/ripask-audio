import {Component, Input, ChangeDetectionStrategy, inject, input} from "@angular/core";
import {ArtistList} from "../subsonic/subsonic.model";
import {PlayerService} from "../player/player.service";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: "app-artist-card",
  templateUrl: "./artist-card.component.html",
  imports: [
    RouterLink,
    MatIcon
  ],
  styleUrls: ["./artist-card.component.scss"]
})
export class ArtistCardComponent {
  private playerService = inject(PlayerService);

  artist = input<ArtistList | null>(null);

  playArtist(artist: ArtistList): void {
    this.playerService.playArtist(artist.id);
  }
}
