import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlaylistsRoutingModule } from './my-playlists-routing.module';
import { MyPlaylistsComponent } from './my-playlists.component';
import { ModalsModule } from 'src/app/modals/modals.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [MyPlaylistsComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    MyPlaylistsRoutingModule,
    ModalsModule
  ]
})
export class MyPlaylistsModule { }
