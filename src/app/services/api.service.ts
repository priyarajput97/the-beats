import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/me`).toPromise();
  }

  getNewReleases(): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/browse/new-releases`).toPromise();
  }

  getAllCategories(): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/browse/categories`).toPromise();
  }

  getPlaylistsByCategory(categoryId): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/browse/categories/${categoryId}/playlists`).toPromise();
  }

  getTracksByPlaylist(playlistId): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/playlists/${playlistId}/tracks`).toPromise();
  }

  getSearchResults(keyword): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/search?q=${keyword}&type=track,album,artist,playlist`).toPromise();
  }

  getArtist(id): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/artists/${id}`).toPromise();
  }

  getAlbumByArtist(id): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/artists/${id}/top-tracks?country=IN`).toPromise();
  }

  getTrack(id): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/tracks/${id}`).toPromise();
  }

  getAlbum(id): Promise<any> {
    return this.http.get(`${environment.apiBase}/v1/albums/${id}`).toPromise();
  }
}
