import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/model/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers = [];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'age',
    'birthDate',
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
