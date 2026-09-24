import {Component, HostBinding, ViewEncapsulation, inject} from "@angular/core";
import {PlayerService, Repeat} from "./player.service";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {PlayerSliderComponent} from "./player-slider.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
  imports: [
    MatIconButton,
    MatIcon,
    RouterLink,
    MatMenu,
    MatSlider,
    MatSliderThumb,
    MatMenuTrigger,
    PlayerSliderComponent,
    NgOptimizedImage
  ],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {
  playerService = inject(PlayerService);

  @HostBinding("class.player") player = true;

  Repeat = Repeat;

  get shuffle(): boolean {
    return this.playerService.getShuffle();
  }

  get repeat(): Repeat {
    return this.playerService.getRepeat();
  }

  coverArtUrl(): string {
    return this.playerService.songLoaded()
      ? this.playerService.currentSong()?.coverArtUrl || ""
      : "";
  }

  setCurrentTime(value: number): void {
    this.playerService.setCurrentTime(value);
  }

  onInputChange(value: number): void {
    if (value !== null) {
      this.playerService.playerVolume = value;
    }
  }

  getPlayIcon(): string {
    return this.playerService.playerPaused()
      ? "play_circle_filled"
      : "pause_circle_filled";
  }

  getVolumeIcon(): string {
    if (this.playerService.playerVolume > 0.5) {
      return "volume_up";
    } else if (this.playerService.playerVolume > 0) {
      return "volume_down";
    } else {
      return "volume_off";
    }
  }

  playRandomSongs(): void {
    this.playerService.playRandomSongs();
  }
}
