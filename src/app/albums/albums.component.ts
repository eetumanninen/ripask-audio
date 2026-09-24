import {Component, OnInit, inject, signal} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album} from "../subsonic/subsonic.model";
import {AlbumListComponent} from "../album-list/album-list.component";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  imports: [
    AlbumListComponent
  ],
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  albums = signal<Album[]>([]);

  ngOnInit(): void {
    this.subsonicService
      .getAlbumListBy("alphabeticalByName")
      .subscribe((res) => {
        this.albums.set(res);
      });
  }
}
