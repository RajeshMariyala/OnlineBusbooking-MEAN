import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService

  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { name, email, password, confirmPassword } = this.signupForm.value;
      if (password !== confirmPassword) {
        alert("Password didn't match");
        return;
      }

      this.registerService.signup(this.signupForm.value).subscribe(
        (res: any) => {
          alert("Registered Successfully!!")
          this.router.navigate(['/login']);
        },
        (error: any) => {
          alert('Something went wrong');
          console.error(error);
        }


      );
      
      this.signupForm.reset();
    }
    else {
      alert("please provide User Details for Login")
    }
  }
}


