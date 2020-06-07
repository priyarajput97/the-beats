import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class AngularMaterialModule { }
