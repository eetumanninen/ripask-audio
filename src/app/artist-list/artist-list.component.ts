import { Component, Input } from "@angular/core";
import { ArtistList } from "../subsonic/subsonic.model";

@Component({
    selector: "app-artist-list",
    templateUrl: "./artist-list.component.html",
    styleUrls: ["./artist-list.component.scss"],
    standalone: false
})
export class ArtistListComponent {
  @Input() artists: ArtistList[] = [];
}
