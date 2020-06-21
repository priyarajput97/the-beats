import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlaylistsRoutingModule } from './my-playlists-routing.module';
import { MyPlaylistsComponent } from './my-playlists.component';
import { ModalsModule } from 'src/app/modals/modals.module';

@NgModule({
  declarations: [MyPlaylistsComponent],
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule,
    ModalsModule
  ]
})
export class MyPlaylistsModule { }
