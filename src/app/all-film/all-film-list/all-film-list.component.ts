import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/http-api.service';
import { environment } from '../../../environments/environment'
import { Router } from '@angular/router';
import { Film } from '../../shared/models/film.model';

@Component({
  selector: 'fr-all-film-list',
  templateUrl: './all-film-list.component.html',
  styleUrls: ['./all-film-list.component.css']
})
export class AllFilmListComponent implements OnInit {

  films: Array<Film>;

  paginationIndex: number;
  preventOverload: boolean;

  constructor(
    private router:Router,
    private httpApi: HttpApiService
  ) { }

  ngOnInit() {
    this.films = new Array();
    this.paginationIndex = 20;
    this.preventOverload = false;
    this.paginationCall(0);
  }

  onScrool(event) {

    if (event.bottomPage && !this.preventOverload) {
      //lock the call
      this.preventOverload = true;
      this.paginationCall(this.paginationIndex);
      this.paginationIndex += 20;
    }

  }

  private paginationCall(index: number) {
    //loading film with scroll pagination for the start will load only 20 film.
    this.httpApi.get(environment.apiUrl + "/film/pagination/" + (index + 1) + "/" + (index + 20)).subscribe(
      response => {

        response.forEach(element => {
          this.films.push(element);
        });

        //No more call before 1 sec...
        setTimeout(() => { 
          this.preventOverload = false; 
        }, 1000);
      });
  }

  openFilmDetail(film:any){
    this.router.navigate(['allFilm/' + film.film_id]);
  }

}
