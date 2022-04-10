import { QuoteModel, Quote } from './models/quote.model';

export const QUOTES: QuoteModel[] = [
  new Quote(
    '1',
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    'Marilyn Monroe',
    new Date('2022-01-01'),
    0,
    0
  ),
  new Quote(
    '2',
    'Be yourself; everyone else is already taken.',
    'Oscar Wilde',
    new Date('2021-11-01'),
    0,
    0
  ),
];
