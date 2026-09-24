import {Component, inject, input} from "@angular/core";
import {Genre} from "../subsonic/subsonic.model";
import {PlayerService} from "../player/player.service";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: "app-genre-card",
  templateUrl: "./genre-card.component.html",
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatIcon
  ],
  styleUrls: ["./genre-card.component.scss"]
})
export class GenreCardComponent {
  private playerService = inject(PlayerService);

  genre = input<Genre | null>(null);

  playRandomByGenre(genre: string): void {
    this.playerService.playRandomSongs(genre);
  }
}
