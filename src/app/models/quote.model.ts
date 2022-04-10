export interface QuoteModel {
  id: number;
  quote: string;
  author: string;
  createdOn: Date;
  upVotes: number;
  downVotes: number;
}
