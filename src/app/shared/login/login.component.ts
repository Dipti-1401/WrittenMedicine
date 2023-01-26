import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginBtn() {
    if (this.email === 'superAdmin@gmail.com') {
      this.router.navigate(['/superAdmin']);
    } else if (this.email === 'techAdmin@gmail.com') {
      this.router.navigate(['/techAdmin']);
    } else if (this.email === 'normal@gmail.com') {
      this.router.navigate(['/normalUser']);
    } else {
      console.log('wrong cred');
    }
  }
}
