import { Pipe } from '@angular/core';

@Pipe({
  name: 'timeago',
})
export class TimeagoPipe {
  transform(value: Date, args?: any): string {
    // Get the difference in seconds
    let diff = Math.floor((new Date().getTime() - value.getTime()) / 1000);

    // If less than a minute, return 'just now'
    if (diff < 60) {
      return 'just now';
    } else if (diff < 60 * 60) {
      // If less than an hour, return minutes
      return Math.floor(diff / 60) + ' minutes ago';
    } else if (diff < 60 * 60 * 24) {
      // If less than a day, return hours
      return Math.floor(diff / (60 * 60)) + ' hours ago';
    } else {
      // If more than a day, return days
      return Math.floor(diff / (60 * 60 * 24)) + ' days ago';
    }
  }
}
