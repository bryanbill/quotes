import { Component, Input, OnInit } from '@angular/core';
import { QuoteModel } from '../models/quote.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  @Input()
  quote!: QuoteModel;

  ngOnInit(): void {
  }

}
