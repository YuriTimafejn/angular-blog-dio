import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    MainMenuComponent,
    MainBannerComponent,
    FooterComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
