import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
