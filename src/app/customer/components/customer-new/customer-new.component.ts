import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent implements OnInit {
  form: FormGroup;
  maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.buildForm();
    this.maxDate = new Date();
  }

  ngOnInit(): void {}

  saveCustomer(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const customer = this.form.value;
      customer.createdAt = new Date().toISOString();
      this.customerService.createCustomer(customer).subscribe((c) => {
        console.log(c);
        this.router.navigate(['./customers']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
    });
  }
}
