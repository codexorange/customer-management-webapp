import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DateAgoPipe } from './pipes/age/age.pipe';
import { DeathDatePipe } from './pipes/deat-date/death-date.pipe';

@NgModule({
  declarations: [DateAgoPipe, DeathDatePipe, HeaderComponent, FooterComponent],
  exports: [DateAgoPipe, DeathDatePipe, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
