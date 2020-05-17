import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackbar: MatSnackBar) { }

  handleError(error) {
    if (error && error.error && error.error.error && error.error.error.message) {
      this.openSnackBar(error.error.error.message, 2000);
    } else {
      console.error(error);
      this.openSnackBar('Something went wrong. Try again!', 2000);
    }
  }

  openSnackBar(message: string, duration: number) {
    this.snackbar.open(message, null, { duration: duration });
  }
}
