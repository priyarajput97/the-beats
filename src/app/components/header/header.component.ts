import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKeyword: string;
  accountDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      this.searchKeyword = param && param.keyword;
    });
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
    this.searchKeyword && this.router.navigate(['/dashboard/search'], { queryParams: { keyword: this.searchKeyword } });
  }

}
