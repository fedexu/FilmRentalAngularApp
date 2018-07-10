import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
