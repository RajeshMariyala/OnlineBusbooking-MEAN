import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuslistService } from '../buslist.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrl: './buslist.component.css'
})
export class BuslistComponent {
  busArray: any[] = [];
  busForm: FormGroup= new FormGroup({});
  isEditing: boolean = false;
  editId: number | null = null;

  constructor(private formBuilder: FormBuilder, private buslistService: BuslistService) { }

  ngOnInit(): void {
    this.createForm();
    this.fetchData();
  }

  createForm(): void {
    this.busForm = this.formBuilder.group({
      Busid: [null, Validators.required],
      BusNo: [null, Validators.required],
      BusName: [null, Validators.required]
    });
  }

  fetchData(){
    this.buslistService.getBusList().subscribe((data: any) => {
      this.busArray = data;
    });
  }
//for Add and update
  addOrUpdateData() {
    if (this.busForm.valid) {
      const busData = this.busForm.value;
  
      if (this.isEditing) {
        // Perform update operation
        this.buslistService.updateBusList(busData).subscribe(
          (response: any) => {
            console.log('Record updated successfully:', response);
            this.fetchData();
            this.clearFields();
            this.isEditing = false; // Reset editing mode
          },
          (error: any) => {
            console.error('Error updating record:', error);
          }
        );
      } else {
        // Perform add operation
        this.buslistService.addBusList(busData).subscribe(
          (response: any) => {
            console.log('Record added successfully:', response);
            this.fetchData();
            this.clearFields();
          },
          (error: any) => {
            console.error('Error adding record:', error);
          }
        );
      }
    }
  }

  edit_click(item: any): void {
    this.isEditing = true;
    this.editId = item.Busid;
    this.busForm.patchValue(item); // Update form values with selected item
  }

  delete_click(Busid: number){
    if (window.confirm('Are you sure you want to delete?')) {
      this.buslistService.deleteBus(Busid).subscribe((response:any) => {
        alert('Record deleted successfully');
        this.fetchData();
      },(error:any)=>{
        console.log(error);
        
      });
    }
  }

  clearFields(): void {
    this.busForm.reset();
    this.isEditing = false;
    this.editId = null;
  }
}


