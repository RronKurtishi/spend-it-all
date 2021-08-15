import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
