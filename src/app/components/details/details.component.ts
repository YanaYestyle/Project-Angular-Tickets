import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/seat.json';
import * as data1 from '../../../assets/data/prise.json';
import { DatasService } from '../../services/datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public name:any = this.datasData.sharedFirstName;
  public lastName:any = this.datasData.sharedLastName;
  public dateUser:any = this.datasData.sharedDate;
  public cityDeparture:any = this.datasData.sharedCityDeparture;
  public cityArrived:any = this.datasData.sharedCityArrived;
  public sharedPrise1: any;
  public sharedPrise2: any;
  public sharedPrise3: any;
  public continentDeparture: any = this.datasData.sharedContinentDeparture;
  public continentArrived: any = this.datasData.sharedContinentArrived;
  public countryDeparture: any = this.datasData.sharedCountryDeparture;
  public countryArrived: any = this.datasData.sharedCountryArrived;
  public passengerSum: any = this.datasData.sharedPassenger;
  public seatOnTheDisplay: any;
  public sharedPrise1ToResult: any;
  public sharedPrise2ToResult: any;
  public sharedPrise3ToResult: any;
  public sharedSeatOnTheDisplay: any;
  public sharedSeatOnTheDisplay1: any;
  public sharedSeatOnTheDisplay2: any;
  public sharedSeatOnTheDisplay3: any;
  public sharedSeatOnTheDisplay4: any;
  public sharedSelected: any;
  public sharedSelectedView: any;
  
  
  
  flightTime: string;
  dateUserToView: any;
  dateUserToView2: any;
  departureTime: any;
  arrivalTime: any;
  viewDisplay = "none";
  viewDisplay1 = "none";
  viewDisplay2= "none";
  passenger2: string;
  passenger3: string;
  passenger4: string;
  passenger5: string;


  //for middle distance
  filas = [
    { y: 250, x: [154.8,175.2,195.5,0, 0, 0] },
    { y: 281.9, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    { y: 313.9, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    { y: 345.9, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 377.8, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 427.8, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 459.8, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 492.1, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 543.6, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 575.3, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 627.1, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 679.5, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 711.4, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 743.3, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 775.2, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 807.1, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 839, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 870.9, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 902.8, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 934.7, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 966.3, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 998.5, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 1030.4, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 1062.3, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 1094.2, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
    {  y: 1126.1, x: [154.8,175.2,195.5,245.1,265.5,285.8] },
  ];
  letras = ["A", "B", "C", "D", "E", "F"];
  status = this.filas.map(x => [
    "free",
    "free",
    "free",
    "free",
    "free",
    "free"
  ]);
  selected:string[]
  
  
  
//for seats
  seatColorChange: boolean = true;
  seatColorChange1: boolean = true;
  seatColorChange2: boolean = true;
  seat: any;
  seat1: any;
  seat2: any;
  details: any;
  details1: any;
  details2: any;
  details3: any;
  details4: any;
  details5: any;
  details6: any;
  details7: any;
  details8: any;
  details9: any;
  details10: any;
  details11: any;
  seatColorChange3: boolean = true;
  seat3: any;
  seatColorChange4: boolean = true;
  seat4: any;
  seatColorChange5: boolean = true;
  seat5: any;
  seatColorChange6: boolean = true;
  seat6: any;
  seatColorChange7: boolean = true;
  seat7: any;
  seatColorChange8: boolean = true;
  seat8: any;
  seatColorChange9: boolean = true;
  seat9: any;
  seatColorChange10: boolean = true;
  seat10: any;
  seatColorChange11: boolean = true;
  seat11: any;
  seatColorChange12: boolean = true;
  seatColorChange13: boolean = true;
  seatColorChange14: boolean = true;
  seatColorChange15: boolean = true;
  seatColorChange16: boolean = true;
  seatColorChange17: boolean = true;
  seatColorChange18: boolean = true ;
  seatColorChange19: boolean = true;
  seatColorChange20: boolean = true;
  seatColorChange21: boolean = true;
  seatColorChange22: boolean = true;
  seatColorChange23: boolean = true;
  seatColorChange24: boolean = true;
  seatColorChange25: boolean = true;
  seatColorChange26: boolean = true;
  seatColorChange27: boolean = true;
  seatColorChange28: boolean = true;
  seatColorChange29: boolean = true;
  seatColorChange30: boolean = true;
  seatColorChange31: boolean = true;
  seatColorChange32: boolean = true;
  seatColorChange33: boolean = true;
  seatColorChange34: boolean = true;
  seatColorChange35: boolean = true;
  seatColorChange36: boolean = true;
  seatColorChange37: boolean = true;
  seatColorChange38: boolean = true;
  seatColorChange39: boolean = true;
  seatColorChange40: boolean = true;
  seatColorChange41: boolean = true;
  seatColorChange42: boolean = true;
  seatColorChange43: boolean = true;
  seatColorChange44: boolean = true;
  seatColorChange45: boolean = true;
  seatColorChange46: boolean = true;
  seatColorChange47: boolean = true;
  seatColorChange48: boolean = true;
  seatColorChange49: boolean = true;
  seatColorChange50: boolean = true;
  seatColorChange51: boolean = true;
  seatColorChange52: boolean = true;
  seatColorChange53: boolean = true;
  seatColorChange54: boolean = true;
  seatColorChange55: boolean = true;
  seatColorChange56: boolean = true;
  seatColorChange57: boolean = true;
  seatColorChange58: boolean = true;
  seatColorChange59: boolean = true;
  seatColorChange60: boolean = true;
  seatColorChange61: boolean = true;
  seatColorChange62: boolean = true;
  seatColorChange63: boolean = true;
  seatColorChange64: boolean = true;
  seatColorChange65: boolean = true;
  seatColorChange66: boolean = true;
  seatColorChange67: boolean = true;
  seatColorChange68: boolean = true;
  seatColorChange69: boolean = true;
  seatColorChange70: boolean = true;
  seatColorChange71: boolean = true;
  seatColorChange72: boolean = true;
  seatColorChange73: boolean = true;
  seatColorChange74: boolean = true;
  seatColorChange75: boolean = true;
  seatColorChange76: boolean = true;
  seatColorChange77: boolean = true;
  seatColorChange78: boolean = true;
  seatColorChange79: boolean = true;
  details79: any;
  seat79: any;

  
  seat40: any;
  seat41: any;
  seat42: any;
  seat43: any;
  seat44: any;
  seat45: any;
  seat46: any;
  seat47: any;
  seat48: any;
  seat49: any;
  seat50: any;
  seat51: any;
  seat52: any;
  seat53: any;
  seat54: any;
  seat55: any;
  seat56: any;
  seat57: any;
  seat58: any;
  seat59: any;
  seat60: any;
  seat61: any;
  seat62: any;
  seat63: any;
  seat64: any;
  seat65: any;
  seat66: any;
  seat67: any;
  seat68: any;
  seat69: any;
  seat70: any;
  seat71: any;
  seat72: any;
  seat73: any;
  seat74: any;
  seat75: any;
  seat76: any;
  seat77: any;
  seat78: any;
  details40: any;
  details41: any;
  details42: any;
  details43: any;
  details44: any;
  details45: any;
  details46: any;
  details47: any;
  details48: any;
  details49: any;
  details50: any;
  details51: any;
  details52: any;
  details53: any;
  details54: any;
  details55: any;
  details56: any;
  details57: any;
  details58: any;
  details59: any;
  details60: any;
  details61: any;
  details62: any;
  details63: any;
  details64: any;
  details65: any;
  details66: any;
  details67: any;
  details68: any;
  details69: any;
  details70: any;
  details71: any;
  details72: any;
  details73: any;
  details74: any;
  details75: any;
  details76: any;
  details77: any;
  details78: any;
  seat12: any;
  seat13: any;
  seat14: any;
  seat15: any;
  seat16: any;
  seat17: any;
  seat18: any;
  seat19: any;
  seat20: any;
  seat21: any;
  seat22: any;
  seat23: any;
  seat24: any;
  seat25: any;
  seat26: any;
  seat27: any;
  seat28: any;
  seat29: any;
  seat30: any;
  seat31: any;
  seat32: any;
  seat33: any;
  seat34: any;
  seat35: any;
  seat36: any;
  seat37: any;
  seat38: any;
  seat39: any;
  details12: any;
  details13: any;
  details14: any;
  details15: any;
  details16: any;
  details17: any;
  details18: any;
  details19: any;
  details20: any;
  details21: any;
  details22: any;
  details23: any;
  details24: any;
  details25: any;
  details26: any;
  details27: any;
  details28: any;
  details29: any;
  details30: any;
  details31: any;
  details32: any;
  details33: any;
  details34: any;
  details35: any;
  details36: any;
  details37: any;
  details38: any;
  details39: any;
  
  
  
  
  //for change color
  h: any;
  
  changeColorSeat = document.addEventListener("click", event => {
    this.h = event.target;
    var id = this.h.id;
    if(id === '1'){
      this.changeSrc;
      this.seatColorChange1 = true;
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '2'){
      this.changeSrc1;
      this.seatColorChange = true;
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true; 
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '3'){
      this.changeSrc2;
      this.seatColorChange = true;
      this.seatColorChange1 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '4'){
      this.changeSrc3;
      this.seatColorChange = true;
      this.seatColorChange2 = true;
      this.seatColorChange1 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '5'){
      this.changeSrc4;
      this.seatColorChange = true;
      this.seatColorChange1 = true;
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '6'){
      this.changeSrc5;
      this.seatColorChange = true;
      this.seatColorChange1 = true;
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange6 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '7'){
      this.changeSrc6;
      this.seatColorChange = true;
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange1 = true;
      this.seatColorChange5 = true;
      this.seatColorChange7 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '8'){
      this.changeSrc7;
      this.seatColorChange = true;
      this.seatColorChange1 = true;
      this.seatColorChange2 = true;  
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange6 = true;
      this.seatColorChange5 = true;
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '9'){
      this.changeSrc8;
      this.seatColorChange = true;
      this.seatColorChange2 = true;
      this.seatColorChange1 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true;  
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '10'){
      this.changeSrc9;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '11'){
      this.changeSrc10;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '12'){
      this.changeSrc11;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '13'){
      this.changeSrc12;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '14'){
      this.changeSrc13;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '15'){
      this.changeSrc14;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '16'){
      this.changeSrc15;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true; 
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '17'){
      this.changeSrc16;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '18'){
      this.changeSrc17;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange71 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '19'){
      this.changeSrc18;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '20'){
      this.changeSrc19;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '21'){
      this.changeSrc20;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '22'){
      this.changeSrc21;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '23'){
      this.changeSrc22;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '24'){
      this.changeSrc23;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '25'){
      this.changeSrc24;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '26'){
      this.changeSrc25;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '27'){
      this.changeSrc26;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '28'){
      this.changeSrc27;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '29'){
      this.changeSrc28;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '30'){
      this.changeSrc29;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '31'){
      this.changeSrc30;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '32'){
      this.changeSrc31;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '33'){
      this.changeSrc32;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '34'){
      this.changeSrc33;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '35'){
      this.changeSrc34;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '36'){
      this.changeSrc35;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '37'){
      this.changeSrc36;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true; 
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '38'){
      this.changeSrc37;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '39'){
      this.changeSrc38;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '40'){
      this.changeSrc39;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '41'){
      this.changeSrc40;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '42'){
      this.changeSrc41;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '43'){
      this.changeSrc42;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '44'){
      this.changeSrc43;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '45'){
      this.changeSrc44;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '46'){
      this.changeSrc45;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '47'){
      this.changeSrc46;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '48'){
      this.changeSrc47;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '49'){
      this.changeSrc48;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '50'){
      this.changeSrc49;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '51'){
      this.changeSrc50;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '52'){
      this.changeSrc51;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '53'){
      this.changeSrc52;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '54'){
      this.changeSrc53;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '55'){
      this.changeSrc54;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '56'){
      this.changeSrc55;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '57'){
      this.changeSrc56;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '58'){
      this.changeSrc57;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '59'){
      this.changeSrc58;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '60'){
      this.changeSrc59;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '61'){
      this.changeSrc60;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '62'){
      this.changeSrc61;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '63'){
      this.changeSrc62;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true; 
    } else if(id === '64'){
      this.changeSrc63;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '65'){
      this.changeSrc64;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '66'){
      this.changeSrc65;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '67'){
      this.changeSrc66;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '68'){
      this.changeSrc67;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '69'){
      this.changeSrc68;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '70'){
      this.changeSrc69;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true; 
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '71'){
      this.changeSrc70;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange71 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '72'){
      this.changeSrc71;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange72 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true; 
    } else if(id === '73'){
      this.changeSrc72;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '74'){
      this.changeSrc73;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '75'){
      this.changeSrc74;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '76'){
      this.changeSrc75;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '77'){
      this.changeSrc76;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '78'){
      this.changeSrc77;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange78 = true;
      this.seatColorChange79 = true;
    } else if(id === '79'){
      this.changeSrc78;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange79 = true;
    } else if(id === '80'){
      this.changeSrc79;
      this.seatColorChange = true;
      this.seatColorChange1 = true;  
      this.seatColorChange2 = true;
      this.seatColorChange3 = true;
      this.seatColorChange4 = true;
      this.seatColorChange5 = true;
      this.seatColorChange6 = true;  
      this.seatColorChange7 = true; 
      this.seatColorChange8 = true;
      this.seatColorChange9 = true;
      this.seatColorChange10 = true;
      this.seatColorChange11 = true;
      this.seatColorChange12 = true;
      this.seatColorChange13 = true;
      this.seatColorChange14 = true;
      this.seatColorChange15 = true;
      this.seatColorChange16 = true;
      this.seatColorChange17 = true;
      this.seatColorChange18 = true;
      this.seatColorChange19 = true;
      this.seatColorChange20 = true;
      this.seatColorChange21 = true;
      this.seatColorChange22 = true;
      this.seatColorChange23 = true;
      this.seatColorChange24 = true;
      this.seatColorChange25 = true;
      this.seatColorChange26 = true;
      this.seatColorChange27 = true;
      this.seatColorChange28 = true;
      this.seatColorChange29 = true;
      this.seatColorChange30 = true;
      this.seatColorChange31 = true;
      this.seatColorChange32 = true;
      this.seatColorChange33 = true;
      this.seatColorChange34 = true;
      this.seatColorChange35 = true;
      this.seatColorChange36 = true;
      this.seatColorChange37 = true;
      this.seatColorChange38 = true;
      this.seatColorChange39 = true;
      this.seatColorChange40 = true;
      this.seatColorChange41 = true;
      this.seatColorChange42 = true;
      this.seatColorChange43 = true;
      this.seatColorChange44 = true;
      this.seatColorChange45 = true;
      this.seatColorChange46 = true;
      this.seatColorChange47 = true;
      this.seatColorChange48 = true;
      this.seatColorChange49 = true;
      this.seatColorChange50 = true;
      this.seatColorChange51 = true;
      this.seatColorChange52 = true;
      this.seatColorChange53 = true;
      this.seatColorChange54 = true;
      this.seatColorChange55 = true;
      this.seatColorChange56 = true;
      this.seatColorChange57 = true;
      this.seatColorChange58 = true;
      this.seatColorChange59 = true;
      this.seatColorChange60 = true;
      this.seatColorChange61 = true;
      this.seatColorChange62 = true;
      this.seatColorChange63 = true;
      this.seatColorChange64 = true;
      this.seatColorChange65 = true;
      this.seatColorChange66 = true;
      this.seatColorChange67 = true;
      this.seatColorChange68 = true;
      this.seatColorChange69 = true;
      this.seatColorChange70 = true;
      this.seatColorChange71 = true;
      this.seatColorChange73 = true;
      this.seatColorChange74 = true;
      this.seatColorChange75 = true;
      this.seatColorChange76 = true;
      this.seatColorChange77 = true;
      this.seatColorChange78 = true;
    } else if(id = 'border111'){
      this.datasData.sharedPrise1ToResult = this.sharedPrise1;
    } else if(id = 'border112'){
      this.datasData.sharedPrise2ToResult = this.sharedPrise2;
    } else if(id = 'border113'){
      this.datasData.sharedPrise3ToResult = this.sharedPrise3;
    } else if(id = '26F'){
      this.selectedView = '26F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '26E'){
      this.selectedView = '26E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '26D'){
      this.selectedView = '26D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '26C'){
      this.selectedView = '26C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '26B'){
      this.selectedView = '26B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '26A'){
      this.selectedView = '26A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25F'){
      this.selectedView = '25F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25E'){
      this.selectedView = '25E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25D'){
      this.selectedView = '25D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25C'){
      this.selectedView = '25C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25B'){
      this.selectedView = '25B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '25A'){
      this.selectedView = '25A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }  else if(id = '24F'){
      this.selectedView = '24F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '24E'){
      this.selectedView = '24E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '24D'){
      this.selectedView = '24D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '24C'){
      this.selectedView = '24C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '24B'){
      this.selectedView = '24B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '24A'){
      this.selectedView = '24A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23F'){
      this.selectedView = '23F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23E'){
      this.selectedView = '23E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23D'){
      this.selectedView = '23D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23C'){
      this.selectedView = '23C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23B'){
      this.selectedView = '23B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '23A'){
      this.selectedView = '23A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22F'){
      this.selectedView = '22F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22E'){
      this.selectedView = '22E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22D'){
      this.selectedView = '22D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22C'){
      this.selectedView = '22C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22B'){
      this.selectedView = '22B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '22A'){
      this.selectedView = '22A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21F'){
      this.selectedView = '21F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21E'){
      this.selectedView = '21E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21D'){
      this.selectedView = '21D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21C'){
      this.selectedView = '21C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21B'){
      this.selectedView = '21B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '21A'){
      this.selectedView = '21A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20F'){
      this.selectedView = '20F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20E'){
      this.selectedView = '20E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20D'){
      this.selectedView = '20D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20C'){
      this.selectedView = '20C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20B'){
      this.selectedView = '20B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '20A'){
      this.selectedView = '20A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19F'){
      this.selectedView = '19F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19E'){
      this.selectedView = '19E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19D'){
      this.selectedView = '19D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19C'){
      this.selectedView = '19C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19B'){
      this.selectedView = '19B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '19A'){
      this.selectedView = '19A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }  else if(id = '18F'){
      this.selectedView = '18F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '18E'){
      this.selectedView = '18E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '18D'){
      this.selectedView = '18D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '18C'){
      this.selectedView = '18C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '18B'){
      this.selectedView = '18B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '18A'){
      this.selectedView = '18A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17F'){
      this.selectedView = '17F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17E'){
      this.selectedView = '17E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17D'){
      this.selectedView = '17D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17C'){
      this.selectedView = '17C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17B'){
      this.selectedView = '17B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '17A'){
      this.selectedView = '17A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }else if(id = '16F'){
      this.selectedView = '16F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '16E'){
      this.selectedView = '16E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '16D'){
      this.selectedView = '16D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '16C'){
      this.selectedView = '16C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '16B'){
      this.selectedView = '16B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '16A'){
      this.selectedView = '16A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15F'){
      this.selectedView = '15F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15E'){
      this.selectedView = '15E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15D'){
      this.selectedView = '15D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15C'){
      this.selectedView = '15C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15B'){
      this.selectedView = '15B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '15A'){
      this.selectedView = '15A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }  else if(id = '14F'){
      this.selectedView = '14F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '14E'){
      this.selectedView = '14E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '14D'){
      this.selectedView = '14D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '14C'){
      this.selectedView = '14C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '14B'){
      this.selectedView = '14B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '14A'){
      this.selectedView = '14A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13F'){
      this.selectedView = '13F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13E'){
      this.selectedView = '13E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13D'){
      this.selectedView = '13D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13C'){
      this.selectedView = '13C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13B'){
      this.selectedView = '13B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '13A'){
      this.selectedView = '13A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12F'){
      this.selectedView = '12F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12E'){
      this.selectedView = '12E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12D'){
      this.selectedView = '12D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12C'){
      this.selectedView = '12C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12B'){
      this.selectedView = '12B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '12A'){
      this.selectedView = '12A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }else if(id = '11F'){
      this.selectedView = '11F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '11E'){
      this.selectedView = '11E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '11D'){
      this.selectedView = '11D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '11C'){
      this.selectedView = '11C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '11B'){
      this.selectedView = '11B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '11A'){
      this.selectedView = '11A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10F'){
      this.selectedView = '10F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10E'){
      this.selectedView = '10E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10D'){
      this.selectedView = '10D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10C'){
      this.selectedView = '10C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10B'){
      this.selectedView = '10B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '10A'){
      this.selectedView = '10A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }  else if(id = '9F'){
      this.selectedView = '9F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '9E'){
      this.selectedView = '9E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '9D'){
      this.selectedView = '9D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '9C'){
      this.selectedView = '9C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '9B'){
      this.selectedView = '9B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '9A'){
      this.selectedView = '9A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8F'){
      this.selectedView = '8F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8E'){
      this.selectedView = '8E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8D'){
      this.selectedView = '8D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8C'){
      this.selectedView = '8C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8B'){
      this.selectedView = '8B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '8A'){
      this.selectedView = '8A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7F'){
      this.selectedView = '7F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7E'){
      this.selectedView = '7E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7D'){
      this.selectedView = '7D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7C'){
      this.selectedView = '7C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7B'){
      this.selectedView = '7B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '7A'){
      this.selectedView = '7A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }else if(id = '6F'){
      this.selectedView = '6F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '6E'){
      this.selectedView = '6E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '6D'){
      this.selectedView = '6D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '6C'){
      this.selectedView = '6C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '6B'){
      this.selectedView = '6B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '6A'){
      this.selectedView = '6A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5F'){
      this.selectedView = '5F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5E'){
      this.selectedView = '5E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5D'){
      this.selectedView = '5D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5C'){
      this.selectedView = '5C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5B'){
      this.selectedView = '5B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '5A'){
      this.selectedView = '5A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    }  else if(id = '4F'){
      this.selectedView = '4F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '4E'){
      this.selectedView = '4E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '4D'){
      this.selectedView = '4D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '4C'){
      this.selectedView = '4C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '4B'){
      this.selectedView = '4B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '4A'){
      this.selectedView = '4A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3F'){
      this.selectedView = '3F';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3E'){
      this.selectedView = '3E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3D'){
      this.selectedView = '3D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3C'){
      this.selectedView = '3C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3B'){
      this.selectedView = '3B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '3A'){
      this.selectedView = '3A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '2E'){
      this.selectedView = '2E';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '2D'){
      this.selectedView = '2D';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '2C'){
      this.selectedView = '2C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '2B'){
      this.selectedView = '2B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '2A'){
      this.selectedView = '2A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '1C'){
      this.selectedView = '1C';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '1B'){
      this.selectedView = '1B';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } else if(id = '1A'){
      this.selectedView = '1A';
      this.sharedSelectedView = this.selectedView;
      this.datasData.sharedSelectedView = this.sharedSelectedView;
    } 
  })
  selectedView: any;
  

 
  
  

  
  
  


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
      this.sharedPrise1 = <any>data1[2].prise1 + " €";
      this.sharedPrise2 = <any>data1[2].prise2 + " €";
      this.sharedPrise3 = <any>data1[2].prise3 + " €";
    } else if(this.cityArrived === "Paris"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[2].prise1 + " €";
      this.sharedPrise2 = <any>data1[2].prise2  + " €";
      this.sharedPrise3 = <any>data1[2].prise3 + " €";
    } else if(this.cityArrived === "Mexico City"){
      this.flightTime = "14 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 4*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (14*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[4].prise1  + " €";
      this.sharedPrise2 = <any>data1[4].prise2 + " €";
      this.sharedPrise3 = <any>data1[4].prise3 + " €";
    } else if(this.cityArrived === "Moscow"){
      this.flightTime = "1 hour and 20 minutes";
      var time1 = new Date(+this.dateUser + 9*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[2].prise1 + " €";
      this.sharedPrise2 = <any>data1[2].prise2 + " €";
      this.sharedPrise3 = <any>data1[2].prise3 + " €";
    } else if(this.cityArrived === "Warsaw"){
      this.flightTime = "1 hour and 00 minutes";
      var time1 = new Date(+this.dateUser + 8*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (1*3600000 + 0*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[1].prise1 + " €";
      this.sharedPrise2 = <any>data1[1].prise2 + " €";
      this.sharedPrise3 = <any>data1[1].prise3 + " €";
    } else if(this.cityArrived === "Dubai"){
      this.flightTime = "6 hours and 17 minutes";
      var time1 = new Date(+this.dateUser + 3*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (6*3600000 + 17*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[3].prise1 + " €";
      this.sharedPrise2 = <any>data1[3].prise2 + " €";
      this.sharedPrise3 = <any>data1[3].prise3 + " €";
    } else if(this.cityArrived === "Berlin"){
      this.flightTime = "3 hours and 10 minutes";
      var time1 = new Date(+this.dateUser + 15*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (3*3600000 + 10*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[0].prise1 + " €";
      this.sharedPrise2 = <any>data1[0].prise2 + " €";
      this.sharedPrise3 = <any>data1[0].prise3 + " €";
    } else if(this.cityArrived === "Los Angeles"){
      this.flightTime = "13 hours and 21 minutes";
      var time1 = new Date(+this.dateUser + 2*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (13*3600000 + 21*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[4].prise1 + " €";
      this.sharedPrise2 = <any>data1[4].prise2 + " €";
      this.sharedPrise3 = <any>data1[4].prise3 + " €";
    } else if(this.cityArrived === "London"){
      this.flightTime = "2 hours and 20 minutes";
      var time1 = new Date(+this.dateUser + 14*3600000);
      this.dateUserToView2 = time1.toUTCString().substring(0,16);
      this.departureTime = time1.toUTCString().substring(16,22);
      var time2 = new Date(+time1 + (2*3600000 + 20*60000));
      this.arrivalTime = time2.toUTCString().substring(16,22);
      this.sharedPrise1 = <any>data1[0].prise1 + " €";
      this.sharedPrise2 = <any>data1[0].prise2 + " €";
      this.sharedPrise3 = <any>data1[0].prise3 + " €";
    }

    //for middle distance
    const booked=["1A","2D","5D","7A","15F","26B"]
    booked.forEach(x=>{
      this.status[+x.slice(0,-1)-1][this.letras.findIndex(l=>l==x.slice(-1))]="booked"
    })
  }

  //for middle distance
  click(fila, column) {
    
    if (this.status[fila][column] == "free" && this.count() < 9)
      this.status[fila][column] = "selected";
    else {
      if (this.status[fila][column] == "selected")
        this.status[fila][column] = "free";
    }
    this.selected=this.seats()
    this.datasData.sharedSelected = this.selected;
  }

  
  count() {
    return this.status
      .map(x => x.filter(s => s == "selected").length)
      .reduce((a, b) => a + b);
  }
  seats() {
    const seats=[]
    this.status.forEach((x,i)=>{
        x.forEach((y,j)=>{
          if (y=='selected')
            seats.push((i+1)+this.letras[j])
        })
    })
    return seats
  }


  //for small distance
  go(){
    if((this.continentDeparture === this.continentArrived) && (this.countryDeparture === this.countryArrived)){
      this.viewDisplay = "block";
    } else if((this.continentDeparture === this.continentArrived) && (this.countryDeparture != this.countryArrived)){
      this.viewDisplay1 = "block";
    } else if((this.continentDeparture != this.continentArrived) && (this.countryDeparture != this.countryArrived)){
      this.viewDisplay2 = "block";
    }
    
  }

  result(){
    if(this.passengerSum === 1){
      this.passenger2 = "";
      this.passenger3 = "";
      this.passenger4 = "";
      this.passenger5 = "";
      this.datasData.sharedSeatOnTheDisplay = this.seatOnTheDisplay;
      this.router.navigate(["/result"]);
    } else if(this.passengerSum === 2){
      this.passenger2 = "Select a seat for the second passenger";
      this.passenger3 = "";
      this.passenger4 = "";
      this.passenger5 = "";
      this.passengerSum = this.passengerSum - 1;
      this.datasData.sharedSeatOnTheDisplay1 = this.seatOnTheDisplay;
      this.router.navigate(["/details"]);
    } else if(this.passengerSum === 3){
      this.passenger2 = "";
      this.passenger3 = "Select a seat for the third passenger";
      this.passenger4 = "";
      this.passenger5 = "";
      this.datasData.sharedSeatOnTheDisplay2 = this.seatOnTheDisplay;
      this.passengerSum = this.passengerSum - 1;
      this.router.navigate(["/details"]);
    } else if(this.passengerSum === 4){
      this.passenger2 = "";
      this.passenger3 = "";
      this.passenger4 = "Select a seat for the fourth passenger";
      this.passenger5 = "";
      this.datasData.sharedSeatOnTheDisplay3 = this.seatOnTheDisplay;
      this.passengerSum = this.passengerSum - 1;
      this.router.navigate(["/details"]);
    } else if(this.passengerSum === 5){
      this.passenger2 = "";
      this.passenger3 = "";
      this.passenger4 = "";
      this.passenger5 = "Select a seat for the fifth passenger";
      this.datasData.sharedSeatOnTheDisplay4 = this.seatOnTheDisplay;
      this.passengerSum = this.passengerSum - 1;
      this.router.navigate(["/details"]);
    } else if(this.viewDisplay1 === "block" || this.viewDisplay2 === "block"){
      this.datasData.sharedSelected = this.selected;
      this.router.navigate(["/result"]);
    } else if(this.viewDisplay1 === "block" && this.viewDisplay === "block"){
      this.datasData.sharedSelectedView = this.selectedView;
      this.router.navigate(["/result"]);
    }
  }


  
  
  
  
  changeSrc(){
    this.seatColorChange = !this.seatColorChange;
    this.seat = <any>data[0].seat;
    if(!this.seatColorChange){
      this.seatOnTheDisplay = this.seat;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc1(){
    this.seatColorChange1 = !this.seatColorChange1;
    this.seat1 = <any>data[1].seat;
    if(!this.seatColorChange1){
      this.seatOnTheDisplay = this.seat1;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc2(){
    this.seatColorChange2 = !this.seatColorChange2;
    this.seat2 = <any>data[2].seat;
    if(!this.seatColorChange2){
      this.seatOnTheDisplay = this.seat2;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc3(){
    this.seatColorChange3 = !this.seatColorChange3;
    this.seat3 = <any>data[3].seat;
    if(!this.seatColorChange3){
      this.seatOnTheDisplay = this.seat3;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc4(){
    this.seatColorChange4 = !this.seatColorChange4;
    this.seat4 = <any>data[4].seat;
    if(!this.seatColorChange4){
      this.seatOnTheDisplay = this.seat4;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc5(){
    this.seatColorChange5 = !this.seatColorChange5;
    this.seat5 = <any>data[5].seat;
    if(!this.seatColorChange5){
      this.seatOnTheDisplay = this.seat5;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc6(){
    this.seatColorChange6 = !this.seatColorChange6;
    this.seat6 = <any>data[6].seat;
    if(!this.seatColorChange6){
      this.seatOnTheDisplay = this.seat6;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc7(){
    this.seatColorChange7 = !this.seatColorChange7;
    this.seat7 = <any>data[7].seat;
    if(!this.seatColorChange7){
      this.seatOnTheDisplay = this.seat7;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc8(){
    this.seatColorChange8 = !this.seatColorChange8;
    this.seat8 = <any>data[8].seat;
    if(!this.seatColorChange8){
      this.seatOnTheDisplay = this.seat8;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc9(){
    this.seatColorChange9 = !this.seatColorChange9;
    this.seat9 = <any>data[9].seat;
    if(!this.seatColorChange9){
      this.seatOnTheDisplay = this.seat9;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc10(){
    this.seatColorChange10 = !this.seatColorChange10;
    this.seat10 = <any>data[10].seat;
    if(!this.seatColorChange10){
      this.seatOnTheDisplay = this.seat10;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc11(){
    this.seatColorChange11 = !this.seatColorChange11;
    this.seat11 = <any>data[11].seat;
    if(!this.seatColorChange11){
      this.seatOnTheDisplay = this.seat11;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc12(){
    this.seatColorChange12 = !this.seatColorChange12;
    this.seat12 = <any>data[12].seat;
    if(!this.seatColorChange12){
      this.seatOnTheDisplay = this.seat12;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc13(){
    this.seatColorChange13 = !this.seatColorChange13;
    this.seat13 = <any>data[13].seat;
    if(!this.seatColorChange13){
      this.seatOnTheDisplay = this.seat13;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc14(){
    this.seatColorChange14 = !this.seatColorChange14;
    this.seat14 = <any>data[14].seat;
    if(!this.seatColorChange14){
      this.seatOnTheDisplay = this.seat14;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc15(){
    this.seatColorChange15 = !this.seatColorChange15;
    this.seat15 = <any>data[15].seat;
    if(!this.seatColorChange15){
      this.seatOnTheDisplay = this.seat15;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc16(){
    this.seatColorChange16 = !this.seatColorChange16;
    this.seat16 = <any>data[16].seat;
    if(!this.seatColorChange16){
      this.seatOnTheDisplay = this.seat16;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc17(){
    this.seatColorChange17 = !this.seatColorChange17;
    this.seat17 = <any>data[17].seat;
    if(!this.seatColorChange17){
      this.seatOnTheDisplay = this.seat17;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc18(){
    this.seatColorChange18 = !this.seatColorChange18;
    this.seat18 = <any>data[18].seat;
    if(!this.seatColorChange18){
      this.seatOnTheDisplay = this.seat18;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc19(){
    this.seatColorChange19 = !this.seatColorChange19;
    this.seat19 = <any>data[19].seat;
    if(!this.seatColorChange19){
      this.seatOnTheDisplay = this.seat19;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc20(){
    this.seatColorChange20 = !this.seatColorChange20;
    this.seat20 = <any>data[20].seat;
    if(!this.seatColorChange20){
      this.seatOnTheDisplay = this.seat20;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc21(){
    this.seatColorChange21 = !this.seatColorChange21;
    this.seat21 = <any>data[21].seat;
    if(!this.seatColorChange21){
      this.seatOnTheDisplay = this.seat21;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc22(){
    this.seatColorChange22 = !this.seatColorChange22;
    this.seat22 = <any>data[22].seat;
    if(!this.seatColorChange22){
      this.seatOnTheDisplay = this.seat22;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc23(){
    this.seatColorChange23 = !this.seatColorChange23;
    this.seat23 = <any>data[23].seat;
    if(!this.seatColorChange23){
      this.seatOnTheDisplay = this.seat23;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc24(){
    this.seatColorChange24 = !this.seatColorChange24;
    this.seat24 = <any>data[24].seat;
    if(!this.seatColorChange24){
      this.seatOnTheDisplay = this.seat24;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc25(){
    this.seatColorChange25 = !this.seatColorChange25;
    this.seat25 = <any>data[25].seat;
    if(!this.seatColorChange25){
      this.seatOnTheDisplay = this.seat25;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc26(){
    this.seatColorChange26 = !this.seatColorChange26;
    this.seat26 = <any>data[26].seat;
    if(!this.seatColorChange26){
      this.seatOnTheDisplay = this.seat26;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc27(){
    this.seatColorChange27 = !this.seatColorChange27;
    this.seat27 = <any>data[27].seat;
    if(!this.seatColorChange27){
      this.seatOnTheDisplay = this.seat27;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc28(){
    this.seatColorChange28 = !this.seatColorChange28;
    this.seat28 = <any>data[28].seat;
    if(!this.seatColorChange28){
      this.seatOnTheDisplay = this.seat28;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc29(){
    this.seatColorChange29 = !this.seatColorChange29;
    this.seat29 = <any>data[29].seat;
    if(!this.seatColorChange29){
      this.seatOnTheDisplay = this.seat29;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc30(){
    this.seatColorChange30 = !this.seatColorChange30;
    this.seat30 = <any>data[30].seat;
    if(!this.seatColorChange30){
      this.seatOnTheDisplay = this.seat30;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc31(){
    this.seatColorChange31 = !this.seatColorChange31;
    this.seat31 = <any>data[31].seat;
    if(!this.seatColorChange31){
      this.seatOnTheDisplay = this.seat31;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc32(){
    this.seatColorChange32 = !this.seatColorChange32;
    this.seat32 = <any>data[32].seat;
    if(!this.seatColorChange32){
      this.seatOnTheDisplay = this.seat32;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc33(){
    this.seatColorChange33 = !this.seatColorChange33;
    this.seat33 = <any>data[33].seat;
    if(!this.seatColorChange33){
      this.seatOnTheDisplay = this.seat33;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc34(){
    this.seatColorChange34 = !this.seatColorChange34;
    this.seat34 = <any>data[34].seat;
    if(!this.seatColorChange34){
      this.seatOnTheDisplay = this.seat34;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc35(){
    this.seatColorChange35 = !this.seatColorChange35;
    this.seat35 = <any>data[35].seat;
    if(!this.seatColorChange35){
      this.seatOnTheDisplay = this.seat35;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc36(){
    this.seatColorChange36 = !this.seatColorChange36;
    this.seat36 = <any>data[36].seat;
    if(!this.seatColorChange36){
      this.seatOnTheDisplay = this.seat36;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc37(){
    this.seatColorChange37 = !this.seatColorChange37;
    this.seat37 = <any>data[37].seat;
    if(!this.seatColorChange37){
      this.seatOnTheDisplay = this.seat37;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc38(){
    this.seatColorChange38 = !this.seatColorChange38;
    this.seat38 = <any>data[38].seat;
    if(!this.seatColorChange38){
      this.seatOnTheDisplay = this.seat38;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc39(){
    this.seatColorChange39 = !this.seatColorChange39;
    this.seat39 = <any>data[39].seat;
    if(!this.seatColorChange39){
      this.seatOnTheDisplay = this.seat39;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc40(){
    this.seatColorChange40 = !this.seatColorChange40;
    this.seat40 = <any>data[40].seat;
    if(!this.seatColorChange40){
      this.seatOnTheDisplay = this.seat40;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc41(){
    this.seatColorChange41 = !this.seatColorChange41;
    this.seat41 = <any>data[41].seat;
    if(!this.seatColorChange41){
      this.seatOnTheDisplay = this.seat41;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc42(){
    this.seatColorChange42 = !this.seatColorChange42;
    this.seat42 = <any>data[42].seat;
    if(!this.seatColorChange42){
      this.seatOnTheDisplay = this.seat42;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc43(){
    this.seatColorChange43 = !this.seatColorChange43;
    this.seat43 = <any>data[43].seat;
    if(!this.seatColorChange43){
      this.seatOnTheDisplay = this.seat43;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc44(){
    this.seatColorChange44 = !this.seatColorChange44;
    this.seat44 = <any>data[44].seat;
    if(!this.seatColorChange44){
      this.seatOnTheDisplay = this.seat44;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc45(){
    this.seatColorChange45 = !this.seatColorChange45;
    this.seat45 = <any>data[45].seat;
    if(!this.seatColorChange45){
      this.seatOnTheDisplay = this.seat45;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc46(){
    this.seatColorChange46 = !this.seatColorChange46;
    this.seat46 = <any>data[46].seat;
    if(!this.seatColorChange46){
      this.seatOnTheDisplay = this.seat46;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc47(){
    this.seatColorChange47 = !this.seatColorChange47;
    this.seat47 = <any>data[47].seat;
    if(!this.seatColorChange47){
      this.seatOnTheDisplay = this.seat47;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc48(){
    this.seatColorChange48 = !this.seatColorChange48;
    this.seat48 = <any>data[48].seat;
    if(!this.seatColorChange48){
      this.seatOnTheDisplay = this.seat48;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc49(){
    this.seatColorChange49 = !this.seatColorChange49;
    this.seat49 = <any>data[49].seat;
    if(!this.seatColorChange49){
      this.seatOnTheDisplay = this.seat49;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc50(){
    this.seatColorChange50 = !this.seatColorChange50;
    this.seat50 = <any>data[50].seat;
    if(!this.seatColorChange50){
      this.seatOnTheDisplay = this.seat50;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc51(){
    this.seatColorChange51 = !this.seatColorChange51;
    this.seat51 = <any>data[51].seat;
    if(!this.seatColorChange51){
      this.seatOnTheDisplay = this.seat51;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc52(){
    this.seatColorChange52 = !this.seatColorChange52;
    this.seat52 = <any>data[52].seat;
    if(!this.seatColorChange52){
      this.seatOnTheDisplay = this.seat52;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc53(){
    this.seatColorChange53 = !this.seatColorChange53;
    this.seat53 = <any>data[53].seat;
    if(!this.seatColorChange53){
      this.seatOnTheDisplay = this.seat53;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc54(){
    this.seatColorChange54 = !this.seatColorChange54;
    this.seat54 = <any>data[54].seat;
    if(!this.seatColorChange54){
      this.seatOnTheDisplay = this.seat54;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc55(){
    this.seatColorChange55 = !this.seatColorChange55;
    this.seat55 = <any>data[55].seat;
    if(!this.seatColorChange55){
      this.seatOnTheDisplay = this.seat55;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc56(){
    this.seatColorChange56 = !this.seatColorChange56;
    this.seat56 = <any>data[56].seat;
    if(!this.seatColorChange56){
      this.seatOnTheDisplay = this.seat56;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc57(){
    this.seatColorChange57 = !this.seatColorChange57;
    this.seat57 = <any>data[57].seat;
    if(!this.seatColorChange57){
      this.seatOnTheDisplay = this.seat57;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc58(){
    this.seatColorChange58 = !this.seatColorChange58;
    this.seat58 = <any>data[58].seat;
    if(!this.seatColorChange58){
      this.seatOnTheDisplay = this.seat58;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc59(){
    this.seatColorChange59 = !this.seatColorChange59;
    this.seat59 = <any>data[59].seat;
    if(!this.seatColorChange59){
      this.seatOnTheDisplay = this.seat59;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc60(){
    this.seatColorChange60 = !this.seatColorChange60;
    this.seat60 = <any>data[60].seat;
    if(!this.seatColorChange60){
      this.seatOnTheDisplay = this.seat60;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc61(){
    this.seatColorChange61 = !this.seatColorChange61;
    this.seat61 = <any>data[61].seat;
    if(!this.seatColorChange61){
      this.seatOnTheDisplay = this.seat61;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc62(){
    this.seatColorChange62 = !this.seatColorChange62;
    this.seat62 = <any>data[62].seat;
    if(!this.seatColorChange62){
      this.seatOnTheDisplay = this.seat62;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc63(){
    this.seatColorChange63 = !this.seatColorChange63;
    this.seat63 = <any>data[63].seat;
    if(!this.seatColorChange63){
      this.seatOnTheDisplay = this.seat63;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc64(){
    this.seatColorChange64 = !this.seatColorChange64;
    this.seat64 = <any>data[64].seat;
    if(!this.seatColorChange64){
      this.seatOnTheDisplay = this.seat64;
    } else {
      this.seatOnTheDisplay = "";
    }
  } 

  changeSrc65(){
    this.seatColorChange65 = !this.seatColorChange65;
    this.seat65 = <any>data[65].seat;
    if(!this.seatColorChange65){
      this.seatOnTheDisplay = this.seat65;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc66(){
    this.seatColorChange66 = !this.seatColorChange66;
    this.seat66 = <any>data[66].seat;
    if(!this.seatColorChange66){
      this.seatOnTheDisplay = this.seat66;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc67(){
    this.seatColorChange67 = !this.seatColorChange67;
    this.seat67 = <any>data[67].seat;
    if(!this.seatColorChange67){
      this.seatOnTheDisplay = this.seat67;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc68(){
    this.seatColorChange68 = !this.seatColorChange68;
    this.seat68 = <any>data[68].seat;
    if(!this.seatColorChange68){
      this.seatOnTheDisplay = this.seat68;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc69(){
    this.seatColorChange69 = !this.seatColorChange69;
    this.seat69 = <any>data[69].seat;
    if(!this.seatColorChange69){
      this.seatOnTheDisplay = this.seat69;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc70(){
    this.seatColorChange70 = !this.seatColorChange70;
    this.seat70 = <any>data[70].seat;
    if(!this.seatColorChange70){
      this.seatOnTheDisplay = this.seat70;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc71(){
    this.seatColorChange71 = !this.seatColorChange71;
    this.seat71 = <any>data[71].seat;
    if(!this.seatColorChange71){
      this.seatOnTheDisplay = this.seat71;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc72(){
    this.seatColorChange72 = !this.seatColorChange72;
    this.seat72 = <any>data[72].seat;
    if(!this.seatColorChange72){
      this.seatOnTheDisplay = this.seat72;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc73(){
    this.seatColorChange73 = !this.seatColorChange73;
    this.seat73 = <any>data[73].seat;
    if(!this.seatColorChange73){
      this.seatOnTheDisplay = this.seat73;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc74(){
    this.seatColorChange74 = !this.seatColorChange74;
    this.seat74 = <any>data[74].seat;
    if(!this.seatColorChange74){
      this.seatOnTheDisplay = this.seat74;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc75(){
    this.seatColorChange75 = !this.seatColorChange75;
    this.seat75 = <any>data[75].seat;
    if(!this.seatColorChange75){
      this.seatOnTheDisplay = this.seat75;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc76(){
    this.seatColorChange76 = !this.seatColorChange76;
    this.seat76 = <any>data[76].seat;
    if(!this.seatColorChange76){
      this.seatOnTheDisplay = this.seat76;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc77(){
    this.seatColorChange77 = !this.seatColorChange77;
    this.seat77 = <any>data[77].seat;
    if(!this.seatColorChange77){
      this.seatOnTheDisplay = this.seat77;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc78(){
    this.seatColorChange78 = !this.seatColorChange78;
    this.seat78 = <any>data[78].seat;
    if(!this.seatColorChange78){
      this.seatOnTheDisplay = this.seat78;
    } else {
      this.seatOnTheDisplay = "";
    }
  }

  changeSrc79(){
    this.seatColorChange79 = !this.seatColorChange79;
    this.seat79 = <any>data[79].seat;
    if(!this.seatColorChange79){
      this.seatOnTheDisplay = this.seat79;
    } else {
      this.seatOnTheDisplay = "";
    }
  }



  
  focus(){
    this.details = <any>data[0].comfort;
  }

  focus1(){
    this.details1 = <any>data[1].comfort;
  }

  focus2(){
    this.details2 = <any>data[2].comfort;
  }

  focus3(){
    this.details3 = <any>data[3].comfort;
  }

  focus4(){
    this.details4 = <any>data[4].comfort;
  }

  focus5(){
    this.details5 = <any>data[5].comfort;
  }

  focus6(){
    this.details6 = <any>data[6].comfort;
  }

  focus7(){
    this.details7 = <any>data[7].comfort;
  }

  focus8(){
    this.details8 = <any>data[8].comfort;
  }

  focus9(){
    this.details9 = <any>data[9].comfort;
  }

  focus10(){
    this.details10 = <any>data[10].comfort;
  }

  focus11(){
    this.details11 = <any>data[11].comfort;
  }

  focus12(){
    this.details12 = <any>data[12].comfort;
  }

  focus13(){
    this.details13 = <any>data[13].comfort;
  }

  focus14(){
    this.details14 = <any>data[14].comfort;
  }

  focus15(){
    this.details15 = <any>data[15].comfort;
  }

  focus16(){
    this.details16 = <any>data[16].comfort;
  }

  focus17(){
    this.details17 = <any>data[17].comfort;
  }

  focus18(){
    this.details18 = <any>data[18].comfort;
  }

  focus19(){
    this.details19 = <any>data[19].comfort;
  }

  focus20(){
    this.details20 = <any>data[20].comfort;
  }

  focus21(){
    this.details21 = <any>data[21].comfort;
  }

  focus22(){
    this.details22 = <any>data[22].comfort;
  }

  focus23(){
    this.details23 = <any>data[23].comfort;
  }

  focus24(){
    this.details24 = <any>data[24].comfort;
  }

  focus25(){
    this.details25 = <any>data[25].comfort;
  }

  focus26(){
    this.details26 = <any>data[26].comfort;
  }

  focus27(){
    this.details27 = <any>data[27].comfort;
  }

  focus28(){
    this.details28 = <any>data[28].comfort;
  }

  focus29(){
    this.details29 = <any>data[29].comfort;
  }

  focus30(){
    this.details30 = <any>data[30].comfort;
  }

  focus31(){
    this.details31 = <any>data[31].comfort;
  }

  focus32(){
    this.details32 = <any>data[32].comfort;
  }

  focus33(){
    this.details33 = <any>data[33].comfort;
  }

  focus34(){
    this.details34 = <any>data[34].comfort;
  }

  focus35(){
    this.details35 = <any>data[35].comfort;
  }

  focus36(){
    this.details36 = <any>data[36].comfort;
  }

  focus37(){
    this.details37 = <any>data[37].comfort;
  }

  focus38(){
    this.details38 = <any>data[38].comfort;
  }

  focus39(){
    this.details39 = <any>data[39].comfort;
  }

  focus40(){
    this.details40 = <any>data[40].comfort;
  }

  focus41(){
    this.details41 = <any>data[41].comfort;
  }

  focus42(){
    this.details42 = <any>data[42].comfort;
  }

  focus43(){
    this.details43 = <any>data[43].comfort;
  }

  focus44(){
    this.details44 = <any>data[44].comfort;
  } 

  focus45(){
    this.details45 = <any>data[45].comfort;
  }

  focus46(){
    this.details46 = <any>data[46].comfort;
  }

  focus47(){
    this.details47 = <any>data[47].comfort;
  }

  focus48(){
    this.details48 = <any>data[48].comfort;
  }

  focus49(){
    this.details49 = <any>data[49].comfort;
  }

  focus50(){
    this.details50 = <any>data[50].comfort;
  }

  focus51(){
    this.details51 = <any>data[51].comfort;
  }

  focus52(){
    this.details52 = <any>data[52].comfort;
  }

  focus53(){
    this.details53 = <any>data[53].comfort;
  }

  focus54(){
    this.details54 = <any>data[54].comfort;
  }

  focus55(){
    this.details55 = <any>data[55].comfort;
  }

  focus56(){
    this.details56 = <any>data[56].comfort;
  } 

  focus57(){
    this.details57 = <any>data[57].comfort;
  }

  focus58(){
    this.details58 = <any>data[58].comfort;
  }

  focus59(){
    this.details59 = <any>data[59].comfort;
  }

  focus60(){
    this.details60 = <any>data[60].comfort;
  }

  focus61(){
    this.details61 = <any>data[61].comfort;
  } 

  focus62(){
    this.details62 = <any>data[62].comfort;
  }

  focus63(){
    this.details63 = <any>data[63].comfort;
  }

  focus64(){
    this.details64 = <any>data[64].comfort;
  }

  focus65(){
    this.details65 = <any>data[65].comfort;
  }

  focus66(){
    this.details66 = <any>data[66].comfort;
  }

  focus67(){
    this.details67 = <any>data[67].comfort;
  }

  focus68(){
    this.details68 = <any>data[68].comfort;
  }

  focus69(){
    this.details69 = <any>data[69].comfort;
  }

  focus70(){
    this.details70 = <any>data[70].comfort;
  }

  focus71(){
    this.details71 = <any>data[71].comfort;
  }

  focus72(){
    this.details72 = <any>data[72].comfort;
  }

  focus73(){
    this.details73 = <any>data[73].comfort;
  }

  focus74(){
    this.details74 = <any>data[74].comfort;
  } 

  focus75(){
    this.details75 = <any>data[75].comfort;
  }

  focus76(){
    this.details76 = <any>data[76].comfort;
  }

  focus77(){
    this.details77 = <any>data[77].comfort;
  }

  focus78(){
    this.details78 = <any>data[78].comfort;
  }
  
  focus79(){
    this.details79 = <any>data[79].comfort;
  }
  


}
