export interface QuoteModel {
  id: string;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  downVotes: number;
}
