import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKeyword: string;
  accountDetails: any;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getMyAccountDetails();
  }

  async getMyAccountDetails() {
    try {
      this.accountDetails = await this.apiService.getAccountDetails();
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  search() {
    console.log(this.searchKeyword)
  }

}
