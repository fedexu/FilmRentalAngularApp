import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { AllFilmComponent } from './all-film/all-film.component';
import { AllFilmListComponent } from './all-film-list/all-film-list.component';
import { AllFilmRoutingModule } from './all-film-routing.module';
import { AllFilmDetailComponent } from './all-film-detail/all-film-detail.component';
import { FilmCardComponentComponent } from '../shared/film-card-component/film-card-component.component';
import { SearchFilmComponent } from './search-film/search-film.component';
import { HttpApiService } from '../shared/http-api.service';
import { ScrollDirective } from '../shared/directive/scroll.directive';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AllFilmRoutingModule
  ],
  declarations: [
    AllFilmComponent,
    AllFilmListComponent,
    AllFilmDetailComponent,
    FilmCardComponentComponent,
    SearchFilmComponent,
    ScrollDirective
  ],
  providers: [
    HttpApiService
  ]
})
export class AllFilmModule { }
