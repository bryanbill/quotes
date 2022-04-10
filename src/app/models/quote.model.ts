export interface QuoteModel {
  id: string;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  downVotes: number;
}

export class Quote implements QuoteModel {
  id: string;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  downVotes: number;
  constructor(
    id: string,
    quote: string,
    author: string,
    createdOn: Date,
    upVotes: number,
    downVotes: number
  ) {
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.createdOn = createdOn;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
  }
}
