import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';
import { NavComponent } from './app/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});