import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'artist',
        loadChildren: () => import('../../pages/artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: 'track',
        loadChildren: () => import('../../pages/track/track.module').then(m => m.TrackModule)
      },
      {
        path: 'album',
        loadChildren: () => import('../../pages/album/album.module').then(m => m.AlbumModule)
      },
      {
        path: 'playlist',
        loadChildren: () => import('../../pages/playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: 'my-playlists',
        loadChildren: () => import('../../pages/my-playlists/my-playlists.module').then(m => m.MyPlaylistsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
