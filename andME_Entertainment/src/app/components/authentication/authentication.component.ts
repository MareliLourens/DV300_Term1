import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) { }

  login = new FormGroup({
    phone_number: new FormControl('', Validators.required),
    unique_answer: new FormControl('', Validators.required)
  });

  uniqueQuestion: string = '';

  ngOnInit() {
    // Fetch the unique question when the component initializes
    this.service.getUniqueQuestion().subscribe(question => {
      this.uniqueQuestion = question;
    });
  }

  onSubmit() {
    if (this.login.value.phone_number !== "" && this.login.value.unique_answer !== "") {
      this.service.loginUser(this.login.value.phone_number!, this.login.value.unique_answer!)
        .subscribe((success) => {
          if (success) {
            this.router.navigateByUrl("/locations");
          }
        });
    }
  }

  revealQuestion() {
    // Fetch the unique question again when the button is clicked
    this.service.getUniqueQuestion().subscribe(question => {
      this.uniqueQuestion = question;
    });
  }
}
