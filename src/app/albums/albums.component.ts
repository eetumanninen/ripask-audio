import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { SubsonicService } from "../subsonic/subsonic.service";
import { Album } from "../subsonic/subsonic.model";

@Component({
    selector: "app-albums",
    templateUrl: "./albums.component.html",
    styleUrls: ["./albums.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlbumsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  albums: Album[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.subsonicService
      .getAlbumListBy("alphabeticalByName")
      .subscribe((res) => {
        this.albums = res;
      });
  }
}
