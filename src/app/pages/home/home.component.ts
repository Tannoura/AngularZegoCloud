import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  roomId: string='';
  route=inject(Router);
  constructor() { }
  enterRoom() {
console.log(this.roomId);
this.route.navigateByUrl(`/room/${this.roomId}`);
}


}
