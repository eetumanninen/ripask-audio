import { Component, Input, ChangeDetectionStrategy, inject } from "@angular/core";
import {Genre} from "../subsonic/subsonic.model";
import {PlayerService} from "../player/player.service";

@Component({
    selector: "app-genre-card",
    templateUrl: "./genre-card.component.html",
    styleUrls: ["./genre-card.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class GenreCardComponent {
  private playerService = inject(PlayerService);

  @Input() genre: Genre | null = null;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
  }

  playRandomByGenre(genre: string): void {
    this.playerService.playRandomSongs(genre);
  }
}
