import { Component } from '@angular/core';
import { UserlistService } from '../userlist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  userArray: any[] = [];
  isEditing: boolean = false;
  userForm: FormGroup =new FormGroup({});;
  
  constructor(private formBuilder: FormBuilder, private userlistService: UserlistService) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Refno: ['', Validators.required],
      Amount: ['', Validators.required],
      Name: ['', Validators.required],
      Status: ['', Validators.required],
    });
    this.fetchData();
  }

  fetchData() {
    this.userlistService.getUserData().subscribe(
      (data: any) => {
        this.userArray = data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addDataButtonClick() {
     if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (this.isEditing) {
        // Handle update operation
        // Call your service method to update data
        this.userlistService.updateUserData(formData).subscribe(
          (response: any) => {
            console.log('Record updated successfully:', response);
            this.isEditing = false;
            this.fetchData();
          },
          (error: any) => {
            console.error('Error updating record:', error);
          }
        );
      } 
    }
  }

  editClick(item: any) {
  
    this.isEditing = true;
    this.userForm.patchValue(item); // Update the form with item data for editing
  }
}