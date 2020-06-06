import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
