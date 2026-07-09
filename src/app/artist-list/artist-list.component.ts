import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ArtistList } from "../subsonic/subsonic.model";

@Component({
    selector: "app-artist-list",
    templateUrl: "./artist-list.component.html",
    styleUrls: ["./artist-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArtistListComponent {
  @Input() artists: ArtistList[] = [];
}
