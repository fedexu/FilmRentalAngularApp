import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'fr-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading: boolean;

  constructor(private loaderService:LoaderService) { }

  ngOnInit() {
    this.loaderService.loaderBarActive.subscribe(loading => {
      this.isLoading = loading?true:false;
    });
  }

}
