import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="{ 'hidden': loaderService.loaderState | async }">
      <div class="container-md">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-loader *ngIf="loaderService.loaderState | async"></app-loader>
  `,
  styles: []
})
export class AppComponent {
  constructor(public loaderService: LoaderService) {}
}
