import { Component,OnInit } from '@angular/core';
import { FinnhubService } from './finnhub.service';

export interface Symbol {
  "data":
  [
    {
      "symbol":string,
      "year":number,
      "month":number,
      "change":number,
      "mspr":number
    }
  ],
  "symbol":string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public stockData:any;
  title = 'stock-tracker';
  userInput = '';
  newData: any;
  list:any[]=[];
  icon1="\u{1F869}";
  icon2="\u{1F86B}"
  //Symbol: string = ''
  getData(val:string){
  
    localStorage.setItem('Symbol', JSON.stringify(val))
    this.userInput = val;
    //console.log("symbol: " +val);
    this.finnhubService.callService(val).subscribe(data=>{
       this.stockData = data;
       this.list.push({id: this.list.length, name: this.stockData,symbol:this.userInput})
       console.warn(this.list)

      //console.log("Change Today: " +this.stockData.d)
      //console.log("Opening Price: " +this.stockData.o)
      //console.log("Current Price: " +this.stockData.c)
      //console.log("High Price: " +this.stockData.h)
    })
    
    //this.newData = this.finnhubService.callService(val)
    //console.log("apidata: " +this.newData)
  }
  removeList(id:number){
      console.log(id);
      this.list=this.list.filter(item=>item.id!==id)
  }
  getSentiment(stock:any){
    console.log("sentiment detail: " +stock.symbol)
    //this.goSentiment(stock.symbol)
  }
  constructor(private finnhubService: FinnhubService){}
//  ngOnInit(){
//   //  this.finnhubService.getPosts().subscribe(result() =>{
//   //   console.log("result" , result)
//   // })
//  }

ngOnInit(){
  this.getData1()
}





public sentData: Symbol[]=[]
getData1(){

  this.finnhubService.getSentimentData('TSLA').subscribe((response) => {
    var data1 = JSON.stringify(response)
    let data = JSON.parse(data1)
    this.sentData.push(data);
    console.log("fdgfdgfdgfdgfg",   this.sentData[0].data)
  })
}
  
  
}
