import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { SubsonicService } from "../subsonic/subsonic.service";
import { Album } from "../subsonic/subsonic.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-genre",
    templateUrl: "./genre.component.html",
    styleUrls: ["./genre.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class GenreComponent implements OnInit {
  private subsonicService = inject(SubsonicService);
  private router = inject(ActivatedRoute);

  albums: Album[] = [];
  genre = "";

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.genre = decodeURIComponent(
      this.router.snapshot.paramMap.get("id") as string,
    );
    this.subsonicService
      .getAlbumListBy("byGenre", 0, this.genre)
      .subscribe((res) => {
        this.albums = res;
      });
  }
}
