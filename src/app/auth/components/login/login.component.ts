import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
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
        this.router.navigate(['/surveys']);
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  isValidField(field: string): boolean {
    return this.userForm.get(field).touched && this.userForm.get(field).valid;
  }
}
