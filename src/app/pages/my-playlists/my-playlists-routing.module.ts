import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPlaylistsComponent } from './my-playlists.component';

const routes: Routes = [
  {
    path: '',
    component: MyPlaylistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlaylistsRoutingModule { }
