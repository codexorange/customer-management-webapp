import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AgePipe } from './pipes/age/age.pipe';

@NgModule({
  declarations: [AgePipe, HeaderComponent, FooterComponent],
  exports: [AgePipe, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
