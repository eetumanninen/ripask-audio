import {Component, input} from "@angular/core";
import {Genre} from "../subsonic/subsonic.model";
import {GenreCardComponent} from "../genre-card/genre-card.component";

@Component({
  selector: "app-genre-list",
  templateUrl: "./genre-list.component.html",
  imports: [
    GenreCardComponent
  ],
  styleUrls: ["./genre-list.component.scss"]
})
export class GenreListComponent {
  genres = input<Genre[]>([]);
}
