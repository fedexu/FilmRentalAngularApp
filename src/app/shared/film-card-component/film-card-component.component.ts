import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fr-film-card',
  templateUrl: './film-card-component.component.html',
  styleUrls: ['./film-card-component.component.css'],
})
export class FilmCardComponentComponent implements OnInit {

  @Input() film: any;

  constructor() { }

  ngOnInit() {
  }

}
