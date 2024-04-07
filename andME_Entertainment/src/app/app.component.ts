import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

//1. @Component decorator - define all our component files
@Component({
  selector: 'app-root', //what we call the component in html <>
  standalone: true,
  imports: [RouterOutlet, LandingComponent, CommonModule, RouterLink, RouterLinkActive ], //import any components or angular material
  templateUrl: './app.component.html', //render html
  styleUrl: './app.component.css' //styling
})
export class AppComponent {
  //add all our variables/ functions and behaviour of our component
  title = '&ME Entertainment';
  
  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigate(['/landing']);
  }

  
  
}


