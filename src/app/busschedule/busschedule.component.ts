import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusScheduleService } from './bus-schedule.service';
@Component({
  selector: 'app-busschedule',
  templateUrl: './busschedule.component.html',
  styleUrl: './busschedule.component.css'
})
export class BusscheduleComponent {

  busSchedulingArray: any[] = [];
  showForm: boolean = false;
  scheduleForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private busScheduleService: BusScheduleService
  ) {}

  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      sno: ['', Validators.required],
      name: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      Start: ['', Validators.required],
      End: ['', Validators.required],
      Price: ['', Validators.required]
    });

    this.getData();
  }

  getData() {
    this.busScheduleService.getData().subscribe(
      (resData: any) => {
        console.log(resData);
        
        this.busSchedulingArray = resData;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

    addData() {
    if (this.scheduleForm.valid) {
      this.busScheduleService.addData(this.scheduleForm.value).subscribe(
        (response: any) => {
          console.log('Data added successfully:', response);
          this.showForm = false;
          this.getData();
          this.scheduleForm.reset();
        },
        (error: any) => {
          console.error('Error adding data:', error);
        }
      );
    }
  }
//click on select row
  selectRow(bus: any) {
  this.showForm = !this.showForm;
     this.scheduleForm.patchValue({
      sno: bus.sno,
      name: bus.name,
      from: bus.from,
      to: bus.to,
      type: bus.type,
      Start: bus.Start,
      End: bus.End,
      Price: bus.Price
    });
  }

  updateData() {
    
    if (this.scheduleForm.valid) {
      const formData = JSON.stringify(this.scheduleForm.value);
      alert(formData);
      this.busScheduleService.updateData(this.scheduleForm.value).subscribe(
        (response: any) => {
          console.log('Record updated successfully:', response);
          this.showForm = false;
          this.getData();
          
        },
        (error: any) => {
          console.error('Error updating record:', error);
        }
      );
    }
  }

  deleteData(sno: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.busScheduleService.delete(sno).subscribe(
        (response: any) => {
          console.log('Record deleted successfully:', response);
          this.getData();
        },
        (error: any) => {
          console.error('Error deleting record:', error);
        }
      );
    }
  }
}