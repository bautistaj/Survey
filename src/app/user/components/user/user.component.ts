import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  public pager: any;
  public pageName = '';
  constructor(private activateRoute: ActivatedRoute, private userService: UserService) { }

  public users: User[];

  ngOnInit(): void {
    this.index();
  }

  index(): void {
    this.activateRoute.params.subscribe(async params => {
      const page: number = params.page;
      this.pager = await this.userService.index(page);
      this.users = this.pager.content;
      this.pageName = '/users/page';
    });
  }
}
