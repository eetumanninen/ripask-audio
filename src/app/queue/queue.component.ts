import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Song } from "../subsonic/subsonic.model";
import { QueueService } from "./queue.service";

@Component({
    selector: "app-queue",
    templateUrl: "./queue.component.html",
    styleUrls: ["./queue.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class QueueComponent {
  constructor(private queueService: QueueService) {}

  get queue(): Song[] {
    return this.queueService.queue;
  }
}
