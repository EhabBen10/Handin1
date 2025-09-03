import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';

const routes: Routes = [
  {
    path: '',
    component: CardlistComponent
  },
  {
    path: ":id",
    component: CarddetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
