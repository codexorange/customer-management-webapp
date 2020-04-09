import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const now = new Date();
    const mSeconds = now.getTime() - new Date(value).getTime();
    return Math.floor(mSeconds / 31536000000);
  }
}
