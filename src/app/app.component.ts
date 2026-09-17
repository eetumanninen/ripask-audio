import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy, inject } from "@angular/core";
import { PlayerService } from "./player/player.service";
import { GlobalsService } from "./globals.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements OnInit, AfterViewInit {
  private playerService = inject(PlayerService);
  private globals = inject(GlobalsService);

  @ViewChild("player") player_elem: ElementRef | undefined;
  loaded = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  get authenticated(): boolean {
    return this.globals.authenticated;
  }

  ngAfterViewInit(): void {
    if (this.player_elem) {
      this.playerService.setPlayer(
        this.player_elem.nativeElement as HTMLAudioElement,
      );
      setTimeout(() => (this.loaded = true));
    }
  }

  ngOnInit(): void {
    this.globals.isAuthenticated().subscribe();
  }
}
