import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllFilmComponent } from "./all-film/all-film.component";
import { AllFilmListComponent } from "./all-film-list/all-film-list.component";
import { AllFilmDetailComponent } from "./all-film-detail/all-film-detail.component";



const homepageRoutes: Routes = [
    {
        path: '', component: AllFilmComponent,
        children: [
            {
                path: ':id',
                component: AllFilmDetailComponent
            },
            {
                path: '',
                component: AllFilmListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homepageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AllFilmRoutingModule { }