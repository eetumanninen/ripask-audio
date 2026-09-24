import {Component, input} from "@angular/core";
import {ArtistList} from "../subsonic/subsonic.model";
import {ArtistCardComponent} from "../artist-card/artist-card.component";

@Component({
  selector: "app-artist-list",
  templateUrl: "./artist-list.component.html",
  imports: [
    ArtistCardComponent
  ],
  styleUrls: ["./artist-list.component.scss"]
})
export class ArtistListComponent {
  artists = input<ArtistList[]>([]);
}
