import { Pipe } from '@angular/core';

@Pipe({
  name: 'timeago',
})
export class TimeagoPipe {
  // TODO: Refactor this 
  transform(value: Date, args?: any): string {
    // Get the difference in seconds
    let diff = Math.floor((new Date().getTime() - value.getTime()) / 1000);

    // If less than a minute, return 'just now'
    if (diff < 60) {
      return 'just now';
    } else if (diff < 60 * 60) {
      // If less than an hour, return minutes
      return Math.floor(diff / 60) + ' mins ago';
    } else if (diff < 60 * 60 * 24) {
      // If less than a day, return hours
      return Math.floor(diff / (60 * 60)) + ' hs ago';
    } else if (diff < 60 * 60 * 24 * 7) {
      // If less than a week, return days
      return Math.floor(diff / (60 * 60 * 24)) + ' days ago';
    } else if (diff < 60 * 60 * 24 * 7 * 4) {
      // If less than a month, return weeks
      return Math.floor(diff / (60 * 60 * 24 * 7)) + ' weeks ago';
    } else if (diff < 60 * 60 * 24 * 7 * 4 * 12) {
      // If less than a year, return months
      return Math.floor(diff / (60 * 60 * 24 * 7 * 4)) + ' months ago';
    } else {
      // If more than a year, return years
      return Math.floor(diff / (60 * 60 * 24 * 7 * 4 * 12)) + ' years ago';
    }
  }
}
