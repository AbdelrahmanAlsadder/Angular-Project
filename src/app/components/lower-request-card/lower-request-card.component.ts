import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lower-request-card',
  templateUrl: './lower-request-card.component.html',
  styleUrl: './lower-request-card.component.css'
})
export class LowerRequestCardComponent {
  @Input() salary: string='';
  @Input() duration: string='';

}


