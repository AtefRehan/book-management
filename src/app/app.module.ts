import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bookReducer } from './books/book.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Book: bookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
