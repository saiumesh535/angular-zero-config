import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as authState from './login.reducer';
import { LoginAction } from './login.actions';
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

  constructor(private router: Router, private store: Store<authState.State>) { 
    this.store.pipe(select(selectLoginPageState)).pipe().subscribe(lol => {
      console.log('sasa', lol);
    });
  }

  public ngOnInit(): void {}

  public onFormSubmit(): void {
    //  this.router.navigate(['dashboard']);
    this.store.dispatch(new LoginAction({ login: true, user: {
      username: new Date().toDateString(),
    } }));
  }

  public onpenRepo(): void {
    window.open(this.githubLink, '_blank');
  }

}
