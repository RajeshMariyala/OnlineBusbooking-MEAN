import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgControl } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
   filters = {
    startPoint: '',
    endPoint: '',
    date: '',
    ac: false,
    nonAC: false,
    sleeper: false,
    luxury: false,
    superLuxury: false
  };

  filteredBuses: any[] = [];
  buses:any[]=[];
  
  dummyBuses: any[] = [
    { id: 1, name: 'Bus 1', startPoint: 'Start 1', endPoint: 'End 1', isAC: true },
    { id: 2, name: 'Bus 2', startPoint: 'Start 2', endPoint: 'End 2', isAC: false },
    // Add more dummy bus data as needed
  ];

  constructor(private router: Router,private service:BookingService) {}
   
  ngOnInit() {
    this.fetchAllBuses();
  }



  handleFilterChange(filterName: string, event: any) {
    let value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
     
     
    if (filterName === 'startPoint' || filterName === 'endPoint' || filterName === 'date') {
      
      this.setSearchCriteria(filterName, value);
    } else {
      
      this.setFilters(filterName, value);
    }
    if (['ac', 'nonAC', 'sleeper', 'luxury', 'superLuxury'].includes(filterName)) {
      this.setFilters(filterName, value);
  } else {
      this.setSearchCriteria(filterName, value);
  }
    this.filterBuses();
  }

  setSearchCriteria(filterName: string, value: any) {
     this.filters = { ...this.filters, [filterName]: value };
    
  }

  setFilters(filterName: string, value: any) {
    
    this.filters = { ...this.filters, [filterName]: value };
  }

  filterBuses() {
    this.filteredBuses = this.buses.filter(bus => {
      if (!bus || !bus.from || !bus.to) return false; // Check if bus is defined and if bus.from and bus.to are defined
      if (this.filters.ac && !bus.ac) return false;
      if (this.filters.sleeper && !bus.sleeper) return false;
      if (this.filters.luxury && (!bus.ac || !bus.sleeper)) return false;
      if (this.filters.superLuxury && (!bus.ac || !bus.sleeper || !bus.luxury)) return false;
      if (this.filters.nonAC && bus.ac) return false;
  
      const startPoint = this.filters.startPoint ? this.filters.startPoint.toLowerCase() : '';
      const endPoint = this.filters.endPoint ? this.filters.endPoint.toLowerCase() : '';
  
      if (startPoint && bus.from.toLowerCase().indexOf(startPoint) === -1) return false;
      if (endPoint && bus.to.toLowerCase().indexOf(endPoint) === -1) return false;
  
      return true;
    });
  }
  
  

fetchAllBuses() {
  this.service.getAllBuses().subscribe(
    (buses: any[]) => {
      console.log(buses);
      this.buses = buses;
      this.filteredBuses = buses;
    },
    (error:any) => {
      console.error('Error fetching buses:', error);
    }
  );
}

// Add methods to filter buses based on criteria (e.g., AC/non-AC)

search() {
  // Call the method to filter buses based on search criteria
 }
  


  bookSeat() {
    this.router.navigate(['/seats']);
  }
  }