import { Component } from '@angular/core';
import { QuoteModel } from './models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quotes';
  private quotes: QuoteModel[] = [
    {
      id: Date.now().toString(),
      quote: `I'm selfish, impatient and a little insecure. 
        I make mistakes, I am out of control and at times hard to handle.
         But if you can't handle me at my worst, then you sure as hell don't 
         deserve me at my best.`,
      author: 'Marilyn Monroe',
      createdOn: new Date(),
      upVotes: 0,
      downVotes: 0,
    },
  ];
  constructor() {}

  pushQuote(quote: QuoteModel): void {
    this.quotes.push(quote);
  }
}
