import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../model/customer.model';
import { environment } from 'src/environments/environment';
import { CustomerMetadata } from '../model/customer-metadata';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomers() {
    return this.http.get<Customer[]>(`${environment.url_api}/customers`);
  }

  createCustomer(customer: Customer) {
    return this.http.post(`${environment.url_api}/customers`, customer);
  }

  getMeanAge() {
    return this.http.get<CustomerMetadata>(
      `${environment.url_api}/customers/mean`
    );
  }
}
