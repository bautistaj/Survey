import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Util } from './../../../util/util';
import { Pcbrand } from 'src/app/core/model/pcbrand';
import { PcBrandService } from 'src/app/core/services/pc-brand.service';

@Component({
  selector: 'app-pc-brand',
  templateUrl: './pc-brand.component.html',
  styleUrls: ['./pc-brand.component.sass']
})
export class PcBrandComponent implements OnInit {
  public pager: any;
  public pageName = '';
  constructor(private activateRoute: ActivatedRoute,
              private pcBrandService: PcBrandService,
              private util: Util) { }

  public brands: Pcbrand[];

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.activateRoute.params.subscribe(async params => {
      const page: number = params.page;
      this.pager = await this.pcBrandService.index(page);
      this.brands = this.pager.content;
      this.pageName = '/pcbrands/page';
    });
  }
}
