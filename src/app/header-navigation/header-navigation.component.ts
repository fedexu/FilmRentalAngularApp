import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fr-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']  
})
export class HeaderNavigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToHomepage(){
    this.router.navigate(['homepage']);
  }

  goToAllFilm(){
    this.router.navigate(['allFilm']);
  }
}
