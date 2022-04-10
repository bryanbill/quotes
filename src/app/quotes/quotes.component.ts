import { Component, Input, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  @Input()
  quotes!: QuoteModel[];
  constructor() {}

  ngOnInit(): void {}

  downVote(quote: QuoteModel): void {
    // Reduce the quote's downVotes by 1
    quote.downVotes--;
  }
  upVote(quote: QuoteModel): void {
    // Increase the quote's upVotes by 1
    quote.upVotes++;
  }
  deleteQuote(quote: QuoteModel): void {
    // Remove the quote from the quotes array
    this.quotes = this.quotes.filter((q) => q !== quote);
  }
}
