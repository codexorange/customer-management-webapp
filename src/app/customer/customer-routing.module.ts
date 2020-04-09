import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'new',
    component: CustomerNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
