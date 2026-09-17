import { Component, Input, ChangeDetectionStrategy, inject } from "@angular/core";
import { ArtistList } from "../subsonic/subsonic.model";
import { PlayerService } from "../player/player.service";

@Component({
    selector: "app-artist-card",
    templateUrl: "./artist-card.component.html",
    styleUrls: ["./artist-card.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArtistCardComponent {
  private playerService = inject(PlayerService);

  @Input() artist: ArtistList | null = null;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  playArtist(artist: ArtistList): void {
    this.playerService.playArtist(artist.id);
  }
}
