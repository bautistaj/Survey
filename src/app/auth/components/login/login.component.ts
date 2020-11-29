import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from './../../../core/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public tries = 0;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(): void {
    if (this.userForm.valid) {

      const user = this.userForm.value as User;
      this.authService.login(user).subscribe(response => {
        this.authService.handleSession(response);
        this.router.navigate(['/surveys/page/0']);
      },
      error => this.handleError(error));

    } else {
      this.userForm.markAllAsTouched();
    }
  }

  isValidField(field: string): boolean {
    return this.userForm.get(field).touched && this.userForm.get(field).valid;
  }

  handleError(error): void {
    if (error.status === 403) {
      this.tries += 1;
      if (this.tries === 3) {
        this.deactivateUser();
        return;
      }
      swal.fire('Oops...', 'Something went wrong with your account!', 'error');
    }

    if (error.status === 406) {
      swal.fire('Oops...', 'Something went wrong with your account!', 'error');
    }
  }

  async deactivateUser() {
    const user = this.userForm.value as User;
    await this.userService.deactivate(user.username);
    swal.fire('Oops...', `Sorry, your account was deactivated because exceed the maximum number of tries`, 'error');
  }
}
