import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal
} from "@angular/core";
import {PlayerService} from "./player/player.service";
import {GlobalsService} from "./globals.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {PlayerComponent} from "./player/player.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [
    NavbarComponent,
    RouterOutlet,
    PlayerComponent
  ],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  private playerService = inject(PlayerService);
  private globals = inject(GlobalsService);

  @ViewChild("player") player_elem: ElementRef | undefined;
  loaded = signal(false);

  get authenticated(): boolean {
    return this.globals.authenticated;
  }

  ngAfterViewInit(): void {
    if (this.player_elem) {
      this.playerService.setPlayer(
        this.player_elem.nativeElement as HTMLAudioElement,
      );
      setTimeout(() => (this.loaded.set(true)));
    }
  }

  ngOnInit(): void {
    this.globals.isAuthenticated().subscribe();
  }
}
