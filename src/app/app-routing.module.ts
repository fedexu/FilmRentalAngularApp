import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const appRoutes: Routes = [
    { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
    { path: 'allFilm', loadChildren: './all-film/all-film.module#AllFilmModule'},
    { path: '**', redirectTo:'homepage' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }