import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';
import { Router } from '@angular/router';


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
  public sharedPrise1ToResult: any = this.datasData.sharedPrise1ToResult;
  public sharedPrise2ToResult: any = this.datasData.sharedPrise2ToResult;
  public sharedPrise3ToResult: any = this.datasData.sharedPrise3ToResult;
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
  /*viewDisplay = "none";
  viewDisplay1 = "none";
  viewDisplay2= "none";
  passenger2: string;
  passenger3: string;
  passenger4: string;
  passenger5: string;*/


  constructor(private datasData:DatasService, private router:Router) { }

  ngOnInit(): void {
    this.dateUserToView = this.dateUser.toUTCString().substring(0,16);
    if(this.cityArrived === "Palma de Mallorca"){
      this.flightTime = "3 hours and 5 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (3*3600000 + 5*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Paris"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Mexico City"){
      this.flightTime = "14 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 4*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (14*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Moscow"){
      this.flightTime = "1 hour and 20 minutes";
      var time1 = new Date(+this.dateUser + 9*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Warsaw"){
      this.flightTime = "1 hour and 00 minutes";
      var time1 = new Date(+this.dateUser + 8*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 0*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Dubai"){
      this.flightTime = "6 hours and 17 minutes";
      var time1 = new Date(+this.dateUser + 3*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (6*3600000 + 17*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Berlin"){
      this.flightTime = "3 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 15*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (3*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "Los Angeles"){
      this.flightTime = "13 hours and 21 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (13*3600000 + 21*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    } else if(this.cityArrived === "London"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 14*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
    }

  }

  dollars(){

  }

  zl(){

  }
}
