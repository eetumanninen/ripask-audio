import {Component, OnInit, inject, signal} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album} from "../subsonic/subsonic.model";
import {ActivatedRoute} from "@angular/router";
import {AlbumListComponent} from "../album-list/album-list.component";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  imports: [
    AlbumListComponent
  ],
  styleUrls: ["./genre.component.scss"]
})
export class GenreComponent implements OnInit {
  private subsonicService = inject(SubsonicService);
  private router = inject(ActivatedRoute);

  albums = signal<Album[]>([]);
  genre = signal("");

  ngOnInit(): void {
    const id = decodeURIComponent(
      this.router.snapshot.paramMap.get("id") as string,
    );
    this.genre.set(id)
    this.subsonicService
      .getAlbumListBy("byGenre", 0, this.genre())
      .subscribe((res) => {
        this.albums.set(res);
      });
  }
}
