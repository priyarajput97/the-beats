import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  corouselConfig = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  swiperConfig = {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
  };

  newReleases: Array<object> = [];

  categories = [
    { id: 'pop', title: "Pop Songs" },
    { id: 'edm_dance', title: "EDM Songs" },
    { id: 'rock', title: "Rock Songs" },
    { id: 'hiphop', title: "Hip-hop Songs" },
    { id: 'bollywood', title: "Bollywood Songs" },
  ];

  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getNewReleases();
    this.getSongsByCategories();
  }

  async getNewReleases() {
    try {
      const { albums: newReleases } = await this.apiService.getNewReleases();
      this.newReleases = newReleases && newReleases.items;
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  async getSongsByCategories() {
    try {
      await this.categories.forEach(async category => {
        const { playlists } = await this.apiService.getPlaylistsByCategory(category.id) as any;
        const tracks = await this.apiService.getTracksByPlaylist(playlists['items'][0]['id']);
        category['tracks'] = tracks['items'];
      });
    } catch (error) {
      this.commonService.handleError(error);
    }
  }
}
