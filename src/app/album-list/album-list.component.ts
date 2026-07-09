import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Album } from "../subsonic/subsonic.model";

@Component({
    selector: "app-album-list",
    templateUrl: "./album-list.component.html",
    styleUrls: ["./album-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlbumListComponent {
  @Input() albums: Album[] = [];
  @Input() title = "";
}
