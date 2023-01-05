import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { StockSymbol } from './model/stock-symbol';
import { getLocaleDateFormat, getLocalePluralCase } from '@angular/common';
import { Symbol } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {

  constructor(private http:HttpClient) { 
    
  }
  
  APIURL = "https://finnhub.io/api/v1/quote"
  APIKEY = "bu4f8kn48v6uehqi3cqg"
  callService(val:string){
    console.log("Symbol Val: " +val);
    const httpParams = new HttpParams({
      fromObject : {
        symbol: val
      }
    })
    var configUrl = this.APIURL +'?' + httpParams + '&token=' + this.APIKEY;
    console.log("configurl: " +configUrl) 
    return this.http.get(configUrl)
  }


  getSentimentData(stk: string){
    return this.http.get<Symbol[]>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol=TSLA&token=bu4f8kn48v6uehqi3cqg")

  }
  
  

}


