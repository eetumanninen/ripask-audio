import {Component, OnInit, inject, signal} from "@angular/core";
import {GlobalsService} from "../globals.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  imports: [
    FormsModule,
    MatButton
  ],
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  private globals = inject(GlobalsService);
  private router = inject(Router);

  username = signal("");
  password = signal("");
  server = signal("");

  ngOnInit(): void {
    this.username.set(this.globals.user);
    this.password.set(this.globals.password);
    this.server.set(this.globals.baseurl);
  }

  save(): void {
    this.globals
      .setUser(this.username(), this.password(), this.server())
      .subscribe((res) => {
        if (res) {
          this.router.navigate(["recents"]).then();
        }
      });
  }
}
