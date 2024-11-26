import { Book } from './models/book';

export interface AppState {
  readonly book: Book[]; //book instead of books to match the ngrx convention
}
