import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MaterialModule } from '../material/material.module';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerNewComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
