import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;
  public user: User = new User();

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
                this.initForm();
              }

  ngOnInit(): void {
    this.loadData();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      id: [null],
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  async save() {
    if (this.userForm.valid) {

      const user = this.userForm.value as User;

      if(!user.id) {
        await this.userService.create(user);
      }else{
        await this.userService.update(user);
      }

      this.router.navigate(['/users/page/0']);
    }
  }

  isValidField(field: string): boolean {
    return this.userForm.get(field).touched && this.userForm.get(field).valid;
  }

  async loadData() {
    this.activateRouter.params.subscribe(async params => {
      try {
        const { id } = params;

        if (id) {
          this.user = await this.userService.findById(id) as User;
          this.userForm.patchValue(this.user);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
