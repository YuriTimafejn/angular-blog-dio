import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  cover: string = '';
  @Input()
  titlePost: string = '';
  @Input()
  textPost: string = '';
  @Input()
  authorPost: string = '';
  @Input()
  countLikes: number = 0;
}
