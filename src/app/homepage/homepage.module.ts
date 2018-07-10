import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { UserViewComponent } from './user-view/user-view.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomepageRoutingModule
  ],
  declarations: [
    UserViewComponent,
    HomepageComponent
  ]
})
export class HomepageModule { }
