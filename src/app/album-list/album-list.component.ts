import {Component, input} from "@angular/core";
import {Album} from "../subsonic/subsonic.model";
import {AlbumCardComponent} from "../album-card/album-card.component";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  imports: [
    AlbumCardComponent
  ],
  styleUrls: ["./album-list.component.scss"]
})
export class AlbumListComponent {
  albums = input<Album[]>([]);
  title = input("");
}
