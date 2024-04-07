import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root', 
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet, LandingComponent, CommonModule, RouterLink, RouterLinkActive], //import any components or angular material
  templateUrl: './app.component.html', //render html
  styleUrl: './app.component.css' //styling
=======
  imports: [RouterOutlet, LandingComponent, CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css' 
>>>>>>> Stashed changes
})
export class AppComponent {
  title = '&ME Entertainment';
<<<<<<< Updated upstream
=======

  
  constructor(public router: Router) {}

  
  
>>>>>>> Stashed changes
}
