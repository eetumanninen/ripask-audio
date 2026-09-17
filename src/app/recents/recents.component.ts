import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { SubsonicService } from "../subsonic/subsonic.service";
import { Album } from "../subsonic/subsonic.model";

@Component({
    selector: "app-recents",
    templateUrl: "./recents.component.html",
    styleUrls: ["./recents.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RecentsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  recents: Album[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.subsonicService.getAlbumListBy("recent", 40).subscribe((res) => {
      this.recents = res;
    });
  }
}
