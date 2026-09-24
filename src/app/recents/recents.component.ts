import {Component, OnInit, inject, signal} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album} from "../subsonic/subsonic.model";
import {AlbumListComponent} from "../album-list/album-list.component";

@Component({
  selector: "app-recents",
  templateUrl: "./recents.component.html",
  imports: [
    AlbumListComponent
  ],
  styleUrls: ["./recents.component.scss"]
})
export class RecentsComponent implements OnInit {
  private subsonicService = inject(SubsonicService);

  recents = signal<Album[]>([]);

  ngOnInit(): void {
    this.subsonicService.getAlbumListBy("recent", 40).subscribe((res) => {
      this.recents.set(res);
    });
  }
}
