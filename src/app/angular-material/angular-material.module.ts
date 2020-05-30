import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports: [
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
