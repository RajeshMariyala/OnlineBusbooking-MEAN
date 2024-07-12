import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminloginService } from './adminlogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  adminloginForm:FormGroup=new FormGroup({});
  error: string = '';

  constructor(private formBuilder: FormBuilder,private adminLoginService:AdminloginService,private router:Router) {}

  ngOnInit(): void {
    this.adminloginForm = this.formBuilder.group({
      username: ['', Validators .required],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
   
    if (this.adminloginForm.valid) {
      const formValue=this.adminloginForm.value
      const username = formValue.username;
      const password = formValue.password;
      sessionStorage.setItem('token1', username);
     
      this.adminLoginService.login(this.adminloginForm.value).subscribe((response:any)=>
      {
        alert('Login Successful');
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      (error:any) => {
        alert('Something went wrong');
        console.error(error);
      });
    }  else {
     
      if (this.adminloginForm.controls['username'].hasError('required') && this.adminloginForm.controls['password'].hasError('required')) {
        alert('All fields are required.');
      } else if (this.adminloginForm.controls['username'].hasError('required')) {
        alert('User ID is required.');
      } else if (this.adminloginForm.controls['password'].hasError('required')) {
        alert('Password is required.');
      } else if (this.adminloginForm.controls['password'].hasError('minlength')) {
        alert('Password should be at least 8 characters long.');
      }
    }

  }


}

