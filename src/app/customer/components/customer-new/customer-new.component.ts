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
  age: number;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.buildForm();
    this.maxDate = new Date();
  }

  ngOnInit(): void {}

  updateAge(date: string): void {
    const now = new Date();
    const mSeconds = now.getTime() - new Date(date).getTime();
    this.age = Math.floor(mSeconds / 31536000000);
  }

  saveCustomer(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const customer = this.form.value;
      customer.age = this.age;
      customer.createdAt = new Date().toISOString();
      this.customerService.createCustomer(customer).subscribe((c) => {
        this.router.navigate(['./customers']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      age: [''],
    });
  }
}
