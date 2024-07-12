import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from './schedule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  bookArray: any[] = [];

  showForm: boolean = false;
  scheduleForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.getData();
  }
  constructor(private formBuilder: FormBuilder, private scheduleService: ScheduleService) {

    this.scheduleForm = this.formBuilder.group({
      Busid: ['', Validators.required],
      Date: ['', Validators.required],
      Bus: ['', Validators.required],
      Location: ['', Validators.required],
      Availability: ['', Validators.required],
      Price: ['', Validators.required],
    });
  }

  getData() {
    this.scheduleService.getData().subscribe(
      (resData: any) => {
        this.bookArray = resData;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleForm() {

    this.showForm = !this.showForm;

  }

  updateDataButton_click() {
    if (!this.scheduleForm.value.Busid) {
      alert("Please select a row to update.");
      return;
    }
    this.updateRecord();

  }

  addData() {

    if (this.scheduleForm.valid) {


      this.scheduleService.addData(this.scheduleForm.value).subscribe(
        (response: any) => {

          console.log('Data added successfully:', response);
          this.showForm = false;
          this.getData();
        },
        (error: any) => {

          console.error('Error adding data:', error);
        }
      );
    }
  }


  selectRow(bus: any) {
    this.scheduleForm.patchValue({
      Busid: bus.Busid,
      Date: bus.Date,
      Bus: bus.Bus,
      Location: bus.Location,
      Availability: bus.Availability,
      Price: bus.Price
    });

    if (confirm("Are you sure you want to update this record?")) {
      this.showForm = !this.showForm;
    }
  }
  updateRecord() {

    this.scheduleService.updateData(this.scheduleForm.value).subscribe((response: any) => {

      console.log("Record updated successfully:", response);
      this.showForm = false;
      this.getData();
    },
      (error: any) => {

        console.error("Error updating record:", error);
      }
    );
  }

  //for delete
  deleteData(Busid: any) {
    console.log(Busid);

    if (confirm("Are you sure you want to delete this record?")) {
      this.scheduleService.delete(Busid).subscribe(
        (response: any) => {

          console.log("Record deleted successfully:", response);
          this.getData();
        },
        (error: any) => {

          console.error("Error deleting record:", error);
        }
      );
    }
  }

}
