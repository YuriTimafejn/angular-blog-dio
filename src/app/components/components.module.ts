import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    FooterComponent,
    MainBannerComponent,
    MainMenuComponent,
  ],
  exports: [
    CardComponent,
    FooterComponent,
    MainBannerComponent,
    MainMenuComponent,
  ]
})
export class ComponentsModule { }
