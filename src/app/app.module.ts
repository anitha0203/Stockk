import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FinnhubService } from './finnhub.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SentimentComponent } from './sentiment/sentiment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    SentimentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FinnhubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
