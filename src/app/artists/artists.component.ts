import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { SubsonicService } from "../subsonic/subsonic.service";
import { ArtistList } from "../subsonic/subsonic.model";

@Component({
    selector: "app-artists",
    templateUrl: "./artists.component.html",
    styleUrls: ["./artists.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArtistsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  artists: ArtistList[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.subsonicService
      .getArtistList()
      .subscribe((res) => (this.artists = res));
  }
}
