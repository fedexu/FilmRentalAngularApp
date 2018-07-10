import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from '../../shared/http-api.service';
import { environment } from '../../../environments/environment'
import { Film } from '../../shared/models/film.model';

@Component({
  selector: 'fr-all-film-detail',
  templateUrl: './all-film-detail.component.html',
  styleUrls: ['./all-film-detail.component.css']
})
export class AllFilmDetailComponent implements OnInit {

  film: Film;

  constructor(
    private route: ActivatedRoute,
    private httpApi: HttpApiService
  ) { 
    this.film = new Film();
  }

  ngOnInit() {
    let filmId = +this.route.snapshot.paramMap.get('id');

    this.httpApi.get(environment.apiUrl + "/film/detail/" + filmId).subscribe(
      response => {
        this.film = response;
      });
  }

}
