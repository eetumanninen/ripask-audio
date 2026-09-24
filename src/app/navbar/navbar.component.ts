import {Component} from "@angular/core";
import {Link} from "./navbar.model";
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  imports: [
    MatTabNav,
    RouterLinkActive,
    MatTabLink,
    RouterLink,
    MatTabNavPanel
  ],
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  links: Link[] = [
    {name: "Recents", path: "recents"},
    {name: "Artists", path: "artists"},
    {
      name: "Albums",
      path: "albums",
    },
    {name: "Genres", path: "genres"},
  ];
}
