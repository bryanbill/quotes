import { QuoteModel, Quote } from './models/quote.model';

export const QUOTES: QuoteModel[] = [
  new Quote(
    '1',
    "Strive to live, as if you were to die tomorrow",
    'Marilyn Monroe',
    new Date('2022-01-01'),
    0,
    0,
    'anonymous'
  ),
  new Quote(
    '2',
    'Be yourself; everyone else is already taken.',
    'Oscar Wilde',
    new Date('2021-11-01'),
    0,
    0,
    'Willock'
  ),
];
