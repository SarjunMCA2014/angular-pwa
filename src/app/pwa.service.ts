import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;

  constructor(private SwUpdate: SwUpdate) {
    SwUpdate.available.subscribe(event => {
      // if (askUserToUpdate()) {
      alert("Installing the latest updates...");
      window.location.reload();
      // }
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
      alert("Before Install Prompt Fired");
    });
  }

  installPwa() {
    alert("Installing...");
    this.promptEvent.prompt();
    this.promptEvent = null;
  }
}
