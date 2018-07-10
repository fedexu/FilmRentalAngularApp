import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fr-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  years:Array<number> = (Array( 2030 - 1896 ).fill(0).map((_, idx) => 1896 + idx)).reverse();

  constructor() { }

  ngOnInit() {
  }

}
