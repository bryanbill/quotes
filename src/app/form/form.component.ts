import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuoteModel } from '../models/quote.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
   quote!: string;
   author!: string;

  @Output() newQuoteEvent = new EventEmitter<QuoteModel>();
  constructor() {}

  ngOnInit(): void {}

  public createQuote(): void {
    const quote: QuoteModel = {
      id: Date.now().toString(),
      quote: this.quote,
      author: this.author,
      createdOn: new Date(),
      upVotes: 0,
      downVotes: 0,
    };
  }
}
