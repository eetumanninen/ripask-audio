import {Component, OnInit, inject, signal} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {ArtistList} from "../subsonic/subsonic.model";
import {ArtistListComponent} from "../artist-list/artist-list.component";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  imports: [
    ArtistListComponent
  ],
  styleUrls: ["./artists.component.scss"]
})
export class ArtistsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  artists = signal<ArtistList[]>([]);

  ngOnInit(): void {
    this.subsonicService
      .getArtistList()
      .subscribe((res) => (this.artists.set(res)));
  }
}
