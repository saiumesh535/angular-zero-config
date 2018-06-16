import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { isAdmin } from '../utils/locaStorageService';
import { MatDialog } from '@angular/material';
import { AdminLoginDialogComponent } from '../admin-login-dialog/admin-login-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  private subject: Subject<boolean>;
  constructor(public dialog: MatDialog) {
    this.subject = new Subject();
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (isAdmin()) {
      return true;
    } else {
      this.opeDialog();
      return this.subject.asObservable();
    }
  }

  private opeDialog(): void {
    const dialogRef = this.dialog.open(AdminLoginDialogComponent, {
      width: '250px',
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      this.subject.next(result);
    });
  }

}
