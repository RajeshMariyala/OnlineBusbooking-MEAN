import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup=new FormGroup({});
  error: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router,private loginService:LoginService) {}
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }

  login() {

    if (this.loginForm.valid) {
      const formValue=this.loginForm.value
      const username = formValue.username;
      const password = formValue.password;
     
        sessionStorage.setItem('token', username);
        sessionStorage.setItem('username', username);
     
      
      this.loginService.login(this.loginForm.value).subscribe((response:any)=>
      {
        alert('Login Successful');
        console.log(response);
        this.router.navigate(['/booking']);
        
        
      },(error:any) => {
        alert('User Credentials are Invalid');
        console.error(error);
        
      });
    } else {
    
      if (this.loginForm.controls['username'].hasError('required') && this.loginForm.controls['password'].hasError('required')) {
        alert('All fields are required.');
      } else if (this.loginForm.controls['username'].hasError('required')) {
        alert('Username is required.');
      } else if (this.loginForm.controls['password'].hasError('required')) {
        alert('Password is required.');
      } else if (this.loginForm.controls['password'].hasError('minlength')) {
        alert('Password should be at least 8 characters long.');
      }
    }
  }

  // navigateToSignup() {
   
  //   this.router.navigate(['/booking']);
  // }
}


