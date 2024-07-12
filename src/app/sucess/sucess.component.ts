import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrl: './sucess.component.css'
})
export class SucessComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
   
    setTimeout(() => {
      this.router.navigate(['/bus-tickets']); 
    }, 5000);
  }

}
