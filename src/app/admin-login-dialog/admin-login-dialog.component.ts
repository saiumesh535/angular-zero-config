import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { setAdmin } from '../utils/locaStorageService';

import { username, password } from '../../environments/config';

@Component({
  selector: 'app-admin-login-dialog',
  templateUrl: './admin-login-dialog.component.html',
  styleUrls: ['./admin-login-dialog.component.css']
})
export class AdminLoginDialogComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    public dialogRef: MatDialogRef<AdminLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  public onFormSubmit(): void {
    if (this.loginForm.value.username === username && this.loginForm.value.password === password) {
      setAdmin();
      this.dialogRef.close(true);
    }
  }

}
