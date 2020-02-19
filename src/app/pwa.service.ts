import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;
  duration: number = 3000;

  constructor(private swUpdate: SwUpdate, private matSnackBar: MatSnackBar) {
    swUpdate.available.subscribe(event => {
      matSnackBar.open("Installing the latest updates. Please wait...", "Okay", { duration: this.duration });

      setTimeout(() => {
        window.location.reload();
      }, this.duration);
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

  installPwa() {
    this.promptEvent.prompt();
    this.promptEvent = null;
  }
}
