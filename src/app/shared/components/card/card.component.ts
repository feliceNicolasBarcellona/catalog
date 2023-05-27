import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string | undefined;
  opened: boolean = true
}
