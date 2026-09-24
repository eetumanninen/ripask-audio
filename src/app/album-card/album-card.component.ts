import {Component, inject, input} from "@angular/core";
import {Album} from "../subsonic/subsonic.model";
import {PlayerService} from "../player/player.service";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatIcon
  ],
  styleUrls: ["./album-card.component.scss"]
})
export class AlbumCardComponent {
  private playerService = inject(PlayerService);

  album = input<null | Album>(null);

  playAlbum(id: string): void {
    this.playerService.playAlbum(id);
  }
}
