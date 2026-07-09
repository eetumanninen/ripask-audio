import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
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
  @Input() genre: Genre | null = null;

  constructor(private playerService: PlayerService) {
  }

  playRandomByGenre(genre: string): void {
    this.playerService.playRandomSongs(genre);
  }
}
