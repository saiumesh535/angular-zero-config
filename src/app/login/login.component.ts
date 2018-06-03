import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public githubLink = 'https://github.com/saiumesh535/angular-zero-config';

  constructor() { }

  public ngOnInit(): void {
  }

  public onFormSubmit(): void {
    console.log(this.loginForm);
  }

  public onpenRepo(): void {
    window.open(this.githubLink, '_blank');
  }

}
