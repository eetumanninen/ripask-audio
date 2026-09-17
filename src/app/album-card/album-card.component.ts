import { Component, Input, ChangeDetectionStrategy, inject } from "@angular/core";
import {Album} from "../subsonic/subsonic.model";
import {PlayerService} from "../player/player.service";

@Component({
    selector: "app-album-card",
    templateUrl: "./album-card.component.html",
    styleUrls: ["./album-card.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlbumCardComponent {
  private playerService = inject(PlayerService);

  @Input() album: Album | null = null;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
  }

  playAlbum(id: string): void {
    this.playerService.playAlbum(id);
  }
}
