import { OnChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() pager: any;
  @Input() pageName: any;
  public pages: number[];

  public from: number;
  public to: number;

  ngOnInit(): void {
    this.initPager();
    console.log(this.pageName);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newPager = changes.pager;

    if (newPager.previousValue) {
      this.initPager();
    }

  }

  private initPager(): void {
    this.from = Math.min(Math.max(1, this.pager.number - 2), this.pager.totalPages - 3 );
    this.to = Math.max(Math.min(this.pager.totalPages, this.pager.number + 2), 4);

    if (this.pager.totalPages > 3) {
      this.pages = new Array(this.to - this.from + 1)
      .fill(0).map((value, index) => index + this.from );

    } else {
      this.pages = new Array(this.pager.totalPages)
      .fill(0).map((value, index) => index + 1 );
    }
  }
}
