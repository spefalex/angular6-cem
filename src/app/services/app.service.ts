import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private matSnackBar: MatSnackBar,
  
  ) {}

  notify(message: string, options?) {
      
    this.matSnackBar.open(message, undefined, {
      duration: 3000,
      horizontalPosition: 'right',
      ...options
    });
  }
}
