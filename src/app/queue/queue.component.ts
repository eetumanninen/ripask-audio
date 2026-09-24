import {Component, inject} from "@angular/core";
import {Song} from "../subsonic/subsonic.model";
import {QueueService} from "./queue.service";
import {SongListComponent} from "../song-list/song-list.component";

@Component({
  selector: "app-queue",
  templateUrl: "./queue.component.html",
  imports: [
    SongListComponent
  ],
  styleUrls: ["./queue.component.scss"]
})
export class QueueComponent {
  private queueService = inject(QueueService);

  get queue(): Song[] {
    return this.queueService.queue;
  }
}
