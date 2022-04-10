export interface QuoteModel {
  id: string;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  downVotes: number;
  submittedBy: string;
}

export class Quote implements QuoteModel {
  id: string;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  submittedBy: string;
  downVotes: number;
  constructor(
    id: string,
    quote: string,
    author: string,
    createdOn: Date,
    upVotes: number,
    downVotes: number,
    submittedBy: string
  ) {
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.createdOn = createdOn;
    this.submittedBy = submittedBy;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
  }
}
