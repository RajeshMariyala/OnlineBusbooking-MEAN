import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {


  constructor(private router: Router) {

    render({
      id: "#PayPalButtons",
      currency: "INR",
      value: "1210",
      onApprove: (details) => {
        alert("Transaction successful");
        this.router.navigate(['/sucess']); // Redirect to home page
      }
    });
  }

  selectedSeats: number[] = [];
  emptySeats: number[] = Array.from({ length: 18 }, (_, i) => i + 1);
  showEmptySeats: boolean = true;
  showBookedSeats: boolean = true;
  seatPrice: number = 550;
  taxRate: number = 0.1;
  bookedSeats: number[] = [3, 4, 9, 11, 14, 16];
  seats: number[] = Array.from({ length: 18 }, (_, i) => i + 1);

  isSelected(seat: number): boolean {
    return this.selectedSeats.includes(seat);
  }

  isEmpty(seat: number): boolean {
    return this.emptySeats.includes(seat);
  }

  isBooked(seat: number): boolean {
    return this.bookedSeats.includes(seat);
  }

  toggleSeatSelection(seat: number): void {
    if (this.bookedSeats.includes(seat)) {
      alert('Seat ${seat} is already booked.');
      return;
    }

    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(selectedSeat => selectedSeat !== seat);
      this.emptySeats.push(seat);
    } else {
      this.selectedSeats.push(seat);
      this.emptySeats = this.emptySeats.filter(emptySeat => emptySeat !== seat);
    }
  }

  calculateTotalPrice(): number {
    const subtotal = this.selectedSeats.length * this.seatPrice;
    const tax = subtotal * this.taxRate;
    return subtotal + tax;

  }

  
  handleContinueClick(): void {
    console.log('Continue button clicked!');
  }
}