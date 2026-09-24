import {Injectable, inject} from "@angular/core";
import {Router} from "@angular/router";
import {GlobalsService} from "../globals.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  private globals = inject(GlobalsService);
  private router = inject(Router);

  canActivate(): boolean | Observable<boolean> {
    if (this.globals.authenticated) {
      return true;
    } else {
      return this.globals.isAuthenticated().pipe(
        tap((v) => {
          if (!v) {
            this.router.navigate(["account"]).then();
          }
        }),
      );
    }
  }
}
