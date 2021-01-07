import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any= {};
  emailAddress: string;
  password: string;
  token: any;
  errorMessage: string;
  showErrorMessage: boolean = false;
  
  constructor(private loginService: LoginService, private sessionStorageService: SessionStorageService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.credentials.email = this.emailAddress;
    this.credentials.password = this.password;
    this.loginService.login(this.credentials).subscribe((res)=>{
      this.showErrorMessage = false;
      this.token = res.headers.get('x-access-token');
      this.sessionStorageService.store('token', this.token);
      this.router.navigate(['/home']);
    },
      (err)=>{
        this.showErrorMessage = true;
        this.errorMessage = err.error.message;
      }
    );
  }

}
