import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
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
  private queueService = inject(QueueService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  get queue(): Song[] {
    return this.queueService.queue;
  }
}
