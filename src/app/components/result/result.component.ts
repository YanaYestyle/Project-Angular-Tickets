import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public name:any = this.datasData.sharedFirstName;
  public lastName:any = this.datasData.sharedLastName;
  public dateUser:any = this.datasData.sharedDate;
  public cityDeparture:any = this.datasData.sharedCityDeparture;
  public cityArrived:any = this.datasData.sharedCityArrived;
  public continentDeparture: any = this.datasData.sharedContinentDeparture;
  public continentArrived: any = this.datasData.sharedContinentArrived;
  public countryDeparture: any = this.datasData.sharedCountryDeparture;
  public countryArrived: any = this.datasData.sharedCountryArrived;
  public passengerSum: any = this.datasData.sharedPassenger;
  public sharedPrise11ToResult: any = this.datasData.sharedPrise1ToResult;
  public sharedPrise22ToResult: any = this.datasData.sharedPrise2ToResult;
  public sharedPrise33ToResult: any = this.datasData.sharedPrise3ToResult;
  public seatOnTheDisplay: any = this.datasData.sharedSeatOnTheDisplay;
  public sharedSeatOnTheDisplay1: any = this.datasData.sharedSeatOnTheDisplay1;
  public sharedSeatOnTheDisplay2: any = this.datasData.sharedSeatOnTheDisplay2;
  public sharedSeatOnTheDisplay3: any = this.datasData.sharedSeatOnTheDisplay3;
  public sharedSeatOnTheDisplay4: any = this.datasData.sharedSeatOnTheDisplay4;
  public sharedSelected: any = this.datasData.sharedSelected;


  dateUserToView: any;
  dateUserToView2: any;
  flightTime: string;
  departureTime: any;
  arrivalTime: any;
  date: any;
  date1: any;
  date2: any;
  date3: any;
  date4: any;
  /*viewDisplay = "none";
  viewDisplay1 = "none";
  viewDisplay2= "none";
  passenger2: string;
  passenger3: string;
  passenger4: string;
  passenger5: string;*/

  url1 = "http://api.weatherapi.com/v1/forecast.json?key=27961d4a780e44bcae7173229213004&q=";
  url2 = "&days=10&aqi=no&alerts=no";
  urlWeather = "";
  urlExchangeRates = "http://data.fixer.io/api/latest?access_key=1b777b6f16767edc6c891ba5a13fb809"
  temperature: any;
  icon: any;
  temperature1: any;
  temperature2: any;
  icon1: any;
  icon2: any;
  usd: any;
  pln: any;
  priseUsd: any;
  prisePln: any;
  dollar = true;
  dollar1 = false;

  constructor(private datasData:DatasService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.dateUserToView = this.dateUser.toUTCString().substring(0,16);
    if(this.cityArrived === "Palma de Mallorca"){
      console.log(this.cityArrived)
      this.flightTime = "3 hours and 5 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (3*3600000 + 5*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Paris"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Mexico City"){
      this.flightTime = "14 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 4*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (14*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Moscow"){
      this.flightTime = "1 hour and 20 minutes";
      var time1 = new Date(+this.dateUser + 9*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Warsaw"){
      this.flightTime = "1 hour and 00 minutes";
      var time1 = new Date(+this.dateUser + 8*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 0*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Dubai"){
      this.flightTime = "6 hours and 17 minutes";
      var time1 = new Date(+this.dateUser + 3*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (6*3600000 + 17*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Berlin"){
      this.flightTime = "3 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 15*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (3*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "Los Angeles"){
      this.flightTime = "13 hours and 21 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (13*3600000 + 21*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    } else if(this.cityArrived === "London"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 14*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.urlWeather = this.url1 + this.cityArrived + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['forecast'];
        var t2 = t1['forecastday'];
        var d = t2[0].date;
        this.date = d.toString().substring(0,10).split('-').reverse().join('.');
        var d1 = t2[1].date;
        this.date1 = d1.toString().substring(0,10).split('-').reverse().join('.');
        var d2 = t2[2].date;
        this.date2 = d2.toString().substring(0,10).split('-').reverse().join('.');
        var t3 = t2[0].day;
        var t31 = t2[1].day;
        var t32 = t2[2].day;
        this.temperature = t3['avgtemp_c'];
        this.temperature1 = t31['avgtemp_c'];
        this.temperature2 = t32['avgtemp_c'];
        var t4 = t3['condition'];
        var t41 = t31['condition'];
        var t42 = t32['condition'];
        this.icon = t4['icon'];
        this.icon1 = t41['icon'];
        this.icon2 = t42['icon'];
      })
    }

  }
  

 
  dollars(){
    this.dollar = !this.dollar;
    this.getConnectionDetails1().subscribe( (resultExchangeRates:any[]) => {
      console.log(resultExchangeRates);
      var dol = resultExchangeRates['rates'];
      this.usd = dol['USD'];
      if(this.sharedPrise11ToResult){
        var num = this.sharedPrise11ToResult.toString().substring(0,3);
        this.priseUsd = num*this.usd;
      } else if(this.sharedPrise22ToResult){
        var num = this.sharedPrise22ToResult.toString().substring(0,3);
        this.priseUsd = num*this.usd;
      } else if(this.sharedPrise33ToResult){
        var num = this.sharedPrise33ToResult.toString().substring(0,3);
        this.priseUsd = num*this.usd;
      }
  })}

  zl(){this.getConnectionDetails1().subscribe( (resultExchangeRates:any[]) => {
    this.dollar1 = !this.dollar1;
    var pln = resultExchangeRates['rates'];
    this.pln = pln['PLN'];
    if(this.sharedPrise11ToResult){
      var num = this.sharedPrise11ToResult.toString().substring(0,3);
      this.prisePln = num*this.pln;
    } else if(this.sharedPrise22ToResult){
      var num = this.sharedPrise22ToResult.toString().substring(0,3);
      this.prisePln = num*this.pln;
    } else if(this.sharedPrise33ToResult){
      var num = this.sharedPrise33ToResult.toString().substring(0,3);
      this.prisePln = num*this.pln;
    }
  })}

  

  eur(){
    this.dollar1 = true;
  }

  getConnectionDetails(){
    return this.http.get(this.urlWeather);
  }

  getConnectionDetails1() {
  return this.http.get(this.urlExchangeRates);
  }
}
