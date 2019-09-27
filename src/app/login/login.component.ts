import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage(type) {
    if (type === 'email') {
      return this.email.hasError('required') ? 'Please enter Email' :
          this.email.hasError('email') ? 'Not a Valid Email' : '';
    } else if (type === 'password') {
        return this.password.hasError('required') ? 'Please enter password' : '';
    }
  }

  ngOnInit() {
  }

  doLogin() {
    if (this.email.invalid && this.password.invalid) {
      return false;
    } else {
		console.log(this.email);
      this.authService.getAccessToken(this.email.value, this.password.value);
    }
  }

}
