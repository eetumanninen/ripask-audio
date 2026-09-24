import {Component, OnInit, inject, input} from "@angular/core";
import {PlayerService} from "../player/player.service";
import {Song} from "../subsonic/subsonic.model";
import {QueueService} from "../queue/queue.service";
import {shuffleArr} from "../helpers";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";


@Component({
  selector: "app-song-list",
  templateUrl: "./song-list.component.html",
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  styleUrls: ["./song-list.component.scss"]
})
export class SongListComponent implements OnInit {
  private playerService = inject(PlayerService);
  private queueService = inject(QueueService);

  songs = input<Song[]>([]);
  queue = input(false);
  hideAlbum = input(false);
  displayedColumns: string[] = ["track", "title", "length", "artist"];

  ngOnInit(): void {
    if (!this.hideAlbum()) {
      this.displayedColumns.push("album");
    }
  }

  get currentSong(): Song | null {
    return this.playerService.currentSong();
  }

  get playerPaused(): boolean {
    return this.playerService.playerPaused();
  }

  play(song: Song): void {
    if (this.queue()) {
      this.playerService.playSongInQueue(song);
    } else {
      if (this.playerService.getShuffle()) {
        this.queueService.setQueue([
          song,
          ...shuffleArr(this.songs().filter((s) => s.id !== song.id)),
        ]);
      } else {
        this.queueService.setQueue([...this.songs()]);
      }
      this.playerService.playSong(song);
    }
  }
}
