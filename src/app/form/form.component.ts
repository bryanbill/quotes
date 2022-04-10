import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuoteModel, Quote } from '../models/quote.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  quote!: string;
  author!: string;
  submittedBy!: string;

  @Output() newQuoteEvent = new EventEmitter<QuoteModel>();
  constructor() {}

  ngOnInit(): void {}

  public createQuote(): void {
    if (this.author && this.quote && this.submittedBy) {
      const quote: QuoteModel = new Quote(
        Date.now().toString(),
        this.quote,
        this.author,
        new Date(),
        0,
        0,
        this.submittedBy
      );
      this.newQuoteEvent.emit(quote);
      this.emptyFields();
    } else {
      alert('Fill all the fields');
    }
  }
  emptyFields(): void {
    this.author = '';
    this.quote = '';
    this.submittedBy = '';
  }
}
