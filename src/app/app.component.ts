import { Component } from '@angular/core';
<<<<<<< HEAD
import { LoaderService } from './loader.service';
=======
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45

@Component({
  selector: 'app-root',
  template: `
<<<<<<< HEAD
    <div [ngClass]="{ 'hidden': loaderService.loaderState | async }">
      <div class="container-md">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-loader *ngIf="loaderService.loaderState | async"></app-loader>
=======
  <div class="container-md">
    <router-outlet></router-outlet>
  </div>
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45
  `,
  styles: []
})
export class AppComponent {
<<<<<<< HEAD
  constructor(public loaderService: LoaderService) {}
=======
  title = 'client';
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45
}
