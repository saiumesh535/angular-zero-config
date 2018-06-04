import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as authState from './login.reducer';
import { LoginAction, LoginEffect } from './login.actions';
import { selectLoginPageState } from './selectore';

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

  constructor(private router: Router, private store: Store<authState.State>) { }

  public ngOnInit(): void {
    this.store.pipe(select(selectLoginPageState)).pipe().subscribe(lol => {
      console.log('sasa', lol);
    });
  }

  public onFormSubmit(): void {
    //  this.router.navigate(['dashboard']);
    // this.store.dispatch(new LoginAction({ login: true, user: {
    //   username: new Date().toDateString(),
    // } }));
    this.store.dispatch(new LoginEffect({ login: true, user: { username: this.loginForm.value.username  } }));
  }

  public onpenRepo(): void {
    window.open(this.githubLink, '_blank');
  }

}
