import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsService } from './core/services/items.service';
import { PeopleService } from './core/services/people.service';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    resolve: {
      people: PeopleService,
      items: ItemsService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PeopleService, ItemsService]
})
export class AppRoutingModule { }
