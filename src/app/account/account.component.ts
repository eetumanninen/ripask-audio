import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { GlobalsService } from "../globals.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-account",
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccountComponent implements OnInit {
  private globals = inject(GlobalsService);
  private router = inject(Router);

  username = "";
  password = "";
  server = "";

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.username = this.globals.user;
    this.password = this.globals.password;
    this.server = this.globals.baseurl;
  }

  save(): void {
    this.globals
      .setUser(this.username, this.password, this.server)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(["recents"]).then();
        }
      });
  }
}
