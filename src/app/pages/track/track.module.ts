import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackComponent } from './track.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [TrackComponent],
  imports: [
    CommonModule,
    TrackRoutingModule,
    AngularMaterialModule
  ]
})
export class TrackModule { }
