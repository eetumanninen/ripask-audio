import {enableProdMode} from "@angular/core";

import {environment} from "./environments/environment";
import {provideRouter, Routes} from "@angular/router";
import {AccountComponent} from "./app/account/account.component";
import {AuthGuardService} from "./app/auth/auth-guard.service";
import {RecentsComponent} from "./app/recents/recents.component";
import {AlbumsComponent} from "./app/albums/albums.component";
import {AlbumComponent} from "./app/album/album.component";
import {GenresComponent} from "./app/genres/genres.component";
import {GenreComponent} from "./app/genre/genre.component";
import {QueueComponent} from "./app/queue/queue.component";
import {ArtistsComponent} from "./app/artists/artists.component";
import {ArtistComponent} from "./app/artist/artist.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, withXhr} from "@angular/common/http";
import {TransformInterceptor} from "./app/interceptor/transform.interceptor";

const routes: Routes = [
  {path: "account", pathMatch: "full", component: AccountComponent},
  {
    path: "recents",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: RecentsComponent,
  },
  {
    path: "albums",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: AlbumsComponent,
  },
  {
    path: "album/:id",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: AlbumComponent,
  },
  {
    path: "genres",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: GenresComponent,
  },
  {
    path: "genre",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: GenreComponent,
  },
  {
    path: "genre/:id",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: GenreComponent,
  },
  {
    path: "queue",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: QueueComponent,
  },
  {
    path: "artists",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: ArtistsComponent,
  },
  {
    path: "artist/:id",
    pathMatch: "full",
    canActivate: [AuthGuardService],
    component: ArtistComponent,
  },
  {path: "", redirectTo: "/recents", pathMatch: "full"},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {provide: HTTP_INTERCEPTORS, useClass: TransformInterceptor, multi: true},
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ]
}).catch(err => console.error(err));

if (environment.production) {
  enableProdMode();
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js", {scope: "/"}).then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope,
          );
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        },
      );
    });
  }
}
