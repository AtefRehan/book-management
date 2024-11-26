import { createAction ,props } from "@ngrx/store";
import { Book } from "../models/book";

export const addBook = createAction('[Book] Add Book', props<{id: string; title: string; author: string}>());
export const removeBook = createAction('[Book] Remove Book', props<{bookId: string}>());
