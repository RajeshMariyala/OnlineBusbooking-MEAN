import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bus-tickets',
  templateUrl: './bus-tickets.component.html',
  styleUrl: './bus-tickets.component.css'
})
export class BusTicketsComponent implements OnInit{

  currentPage: string = 'history';
  historyArray: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  const storedData = sessionStorage.getItem('token');
  if (storedData!=="undefined") {
    this.fetchData();
  } else {
    alert("Login required");
  }
}

  fetchData(): void {
    this.http.get<any[]>('http://localhost:3005/api/user').subscribe(
      response => {
        this.historyArray = response;
       
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  

  handleDownloadPDF(): void {
    window.open('https://drive.google.com/file/d/1Mb6TjyZlkoLK4ub741NlZYtL0CAmDf2_/view?usp=sharing');
    alert('Downloading PDF...');
  }

  handleDateEdit(id: number): void {
    this.historyArray = this.historyArray.map(item => {
      if (item.id === id) {
        return { ...item, editingDate: true };
      }
      return item;
    });
  }

  handleDateChange(id: number, newDate: string): void {
    this.historyArray = this.historyArray.map(item => {
      if (item.id === id) {
        return { ...item, Date: newDate, editingDate: false };
      }
      return item;
    });
  }


  deleteData(id: number): void {
    const flag = window.confirm('Are you sure want to cancel?');
    if (!flag) {
      return;
    }

    const url = `http://localhost:3005/api/user/${id}`;
    this.http.delete(url).subscribe(
      (resData: any) => {
        alert(resData.status);
      },
      error => {
        console.error('Error deleting ticket:', error);
      }
    );
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const bookingId = (document.getElementById('bookingid') as HTMLInputElement).value;
    const mobileNumber = (document.getElementById('mobileNumber') as HTMLInputElement).value;
    this.deleteData(+bookingId);
  }
}
