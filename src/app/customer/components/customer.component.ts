import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { CustomerMetadata } from 'src/app/core/model/customer-metadata';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  metadata: CustomerMetadata;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchMetadata();
  }

  fetchMetadata(): void {
    this.customerService.getMetadata().subscribe((metadata) => {
      this.metadata = metadata;
    });
  }
}
