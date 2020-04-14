import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deathDate',
})
export class DeathDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const AVERAGE_DEATH_YEARS = 83.5;
    const birthDate = new Date(value);
    const now = new Date();
    const mSeconds = now.getTime() - birthDate.getTime();
    const age = Math.floor(mSeconds / 31536000000);
    const reimaingYears = AVERAGE_DEATH_YEARS - age;

    const deathDate = birthDate;
    deathDate.setFullYear(now.getFullYear() + reimaingYears);

    return deathDate;
  }
}
