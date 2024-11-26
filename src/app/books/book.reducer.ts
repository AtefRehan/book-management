import { createReducer,on } from "@ngrx/store";
import { Book } from "../models/book";
import { addBook, removeBook } from "./book.actions";   

export const initialState: Book[] = [];

export const bookReducer = createReducer( 
    initialState,
    on(addBook, (state,{id,title,author})=>[...state,{id,title,author}]),
    on(removeBook, (state,{bookId})=>state.filter(book=>book.id!==bookId))
);