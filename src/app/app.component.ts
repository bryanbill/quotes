import { Component } from '@angular/core';
import { QuoteModel } from './models/quote.model';
import { QUOTES } from './quote.mock';
import { QuotesComponent } from './quotes/quotes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quotes';
  quotes: QuoteModel[] = QUOTES;
  constructor() {}

  pushQuote(quote: QuoteModel): void {
    this.quotes.push(quote);
  }

  favoriteQuote(): QuoteModel {
    return this.quotes.filter(
      (quote) =>
        quote.upVotes === Math.max(...this.quotes.map((quote) => quote.upVotes))
    )[0];
  }
}
