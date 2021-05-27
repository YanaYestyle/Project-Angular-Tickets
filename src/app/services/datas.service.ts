import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  public sharedFirstName: string;
  public sharedLastName: string;
  public sharedDate: any;
  public sharedCityDeparture: string;
  public sharedCityArrived: string;
  public sharedPrise1: any;
  public sharedPrise2: any;
  public sharedPrise3: any;
  public sharedContinentDeparture: any;
  public sharedContinentArrived: any;
  public sharedCountryDeparture: any;
  public sharedCountryArrived: any;
  public sharedPassenger: any; 
  public sharedPrise1ToResult: any;
  public sharedPrise2ToResult: any;
  public sharedPrise3ToResult: any;
  public sharedSeatOnTheDisplay: any;
  public sharedSelected: any;
  public sharedSeatOnTheDisplay1: any;
  public sharedSeatOnTheDisplay2: any;
  public sharedSeatOnTheDisplay3: any;
  public sharedSeatOnTheDisplay4: any;
  

 

  constructor() { }
}
