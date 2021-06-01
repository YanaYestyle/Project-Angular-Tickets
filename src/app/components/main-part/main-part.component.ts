import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from '../../services/datas.service';


@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css']
})
export class MainPartComponent implements OnInit {

  
  constructor(private router:Router, private datasData:DatasService) {}
  
  hid1 = true;
  hid2 = true;
  hid3 = true;
  selected1: any;
  someDate = new Date();
  //someDate = (new Date()).toISOString().substring(0,10).split('-').reverse().join('.');  if want to have the same display
  dateFromForm: any;
  warningDate: string;
  warningPassengers: string;
  formValuePassenger: any;
  warningCityDeparture: string;
  warningCityArrival: string;
  warningDate2: string;
  warningPassengerForButton: string;
  warningMaxPassenger: string;
  maxFormValuePassenger = 5;

  public userDate: any;
  public selectedCityDeparture: any;
  public selectedCityArrived: any;
  public sharedContinentDeparture: any;
  public sharedContinentArrived: any;
  public sharedCountryDeparture: any;
  public sharedCountryArrived: any;
  public sharedPassenger: any; 
  
  
  selectedOption: string;
  printedOption: string;

  selectedOption1: string;
  printedOption1: string;


  options = [
    { name: "Warsaw", value: 1, country: "Poland", continent: "Eurasia" },
    { name: "Poznan", value: 2, country: "Poland", continent: "Eurasia" },
    { name: "Wroclaw", value: 3, country: "Poland", continent: "Eurasia" }
  ]


  arrivials = [
    { name: "Palma de Mallorca", value: 1, country: "Spain", continent: "Eurasia" },
    { name: "Paris", value: 2, country: "France", continent: "Eurasia" },
    { name: "Mexico City", value: 3, country: "Mexico", continent: "South America" },
  ]


  arrivialsTwo = [
    { name: "Moscow", value: 1, country: "Russia", continent: "Eurasia" },
    { name: "Warsaw", value: 2, country: "Poland", continent: "Eurasia" },
    { name: "Dubai", value: 3, country: "United Arab Emirates", continent: "Africa" }
  ]

  arrivialsThree = [
    { name: "Berlin", value: 1, country: "Germany", continent: "Eurasia" },
    { name: "Los Angeles", value: 2, country: "USA", continent: "North America" },
    { name: "London", value: 3, country: "Great Britain", continent: "Eurasia" }
  ]

  
  ngOnInit(): any {}
  
  
  onSelected(){
    this.printedOption = this.selectedOption;
    this.selectedCityDeparture = this.printedOption;
    this.datasData.sharedCityDeparture = this.selectedCityDeparture;
    if(this.selectedOption == "Warsaw"){
      this.hid1 = false;
      this.hid2 = true;
      this.hid3 = true;
      this.datasData.sharedContinentDeparture = this.options[0].continent;
      this.datasData.sharedCountryDeparture = this.options[0].country;
    } else if(this.selectedOption == "Poznan"){
      this.hid2 = false;
      this.hid1 = true;
      this.hid3 = true;
      this.datasData.sharedContinentDeparture = this.options[1].continent;
      this.datasData.sharedCountryDeparture = this.options[1].country;
    } else if(this.selectedOption == "Wroclaw"){
      this.hid3 = false;
      this.hid1 = true;
      this.hid2 = true;
      this.datasData.sharedContinentDeparture = this.options[2].continent;
      this.datasData.sharedCountryDeparture = this.options[2].country;
    }
    
  }
  
  onArrival(){
    this.printedOption1 = this.selectedOption1;
    this.selectedCityArrived = this.printedOption1;
    this.datasData.sharedCityArrived = this.selectedCityArrived;
    if(this.selectedOption1 == "Palma de Mallorca"){
      this.datasData.sharedContinentArrived = this.arrivials[0].continent;
      this.datasData.sharedCountryArrived = this.arrivials[0].country;
    } else if(this.selectedOption1 == "Paris"){
      this.datasData.sharedContinentArrived = this.arrivials[1].continent;
      this.datasData.sharedCountryArrived = this.arrivials[1].country;
    } else if(this.selectedOption1 == "Mexico City"){
      this.datasData.sharedContinentArrived = this.arrivials[2].continent;
      this.datasData.sharedCountryArrived = this.arrivials[2].country;
    } else if(this.selectedOption1 == "Moscow"){
      this.datasData.sharedContinentArrived = this.arrivialsTwo[0].continent;
      this.datasData.sharedCountryArrived = this.arrivialsTwo[0].country;
    } else if(this.selectedOption1 == "Warsaw"){
      this.datasData.sharedContinentArrived = this.arrivialsTwo[1].continent;
      this.datasData.sharedCountryArrived = this.arrivialsTwo[1].country;
    } else if(this.selectedOption1 == "Dubai"){
      this.datasData.sharedContinentArrived = this.arrivialsTwo[2].continent;
      this.datasData.sharedCountryArrived = this.arrivialsTwo[2].country;
    } else if(this.selectedOption1 == "Berlin"){
      this.datasData.sharedContinentArrived = this.arrivialsThree[0].continent;
      this.datasData.sharedCountryArrived = this.arrivialsThree[0].country;
    } else if(this.selectedOption1 == "Los Angeles"){
      this.datasData.sharedContinentArrived = this.arrivialsThree[1].continent;
      this.datasData.sharedCountryArrived = this.arrivialsThree[1].country;
    } else if(this.selectedOption1 == "London"){
      this.datasData.sharedContinentArrived = this.arrivialsThree[2].continent;
      this.datasData.sharedCountryArrived = this.arrivialsThree[2].country;
    }
  }


  




  dateFor(form:NgForm){
    this.dateFromForm = new Date((form.value['date']))
    this.userDate = this.dateFromForm;
    this.datasData.sharedDate = this.userDate;
    //this.dateFromForm = (form.value['date']).split('-').reverse().join('.'); for trying to display as placeholder
    if(this.dateFromForm < this.someDate){
      this.warningDate = "It is impossible to fly to the past, let's choose a trip to the future"
    } else if(this.dateFromForm >= this.someDate){
      this.warningDate = "";
    }
    console.log(this.someDate)
    console.log(form.value['date'])
    console.log(this.dateFromForm);
    console.log(form.valid)
  }

  passengerFor(form:NgForm){
    this.formValuePassenger = form.value['adult'];
    if(form.value['adult'] <= 0) {
      this.warningPassengers = "Are you going to fly? (enter at least yourself - this means 1)";
    } else if(form.value['adult'] > 0 && form.value['adult'] <= this.maxFormValuePassenger){
      this.warningPassengers = "";
      this.datasData.sharedPassenger = this.formValuePassenger;
    } else if(form.value['adult'] > this.maxFormValuePassenger){
      this.warningMaxPassenger = "The maximum number of tickets that can be purchased at a time is 5 or less.";
    } 
    console.log(form.value)
    console.log(form.valid)
  }


  goToLogin(){
    if(this.selectedOption && this.selectedOption1 && (this.dateFromForm >= this.someDate) && this.formValuePassenger){
      this.router.navigate(["/login"]);
    } else if(!this.selectedOption){
      this.warningCityDeparture = "Сhoose your departure location";
    } else if(!this.selectedOption1){
      this.warningCityArrival = "Choose your destination";
    } else if(!this.dateFromForm){
      this.warningDate2 = "Choose a date";
    } else if(!this.formValuePassenger){
      this.warningPassengerForButton = "Enter the number of passengers, no more than 5";
    }  
      
    /*else if(this.selectedOption ||this.selectedOption1 || this.dateFromForm || this.formValuePassenger){
      this.warningCityDeparture = "";
      this.warningCityArrival = "";
      this.warningDate2 = "";
      this.warningPassengerForButton = "";
    } else if(this.selectedOption1){
      this.warningCityArrival = "";
    } else if(this.dateFromForm){
      this.warningDate2 = "";
    } else if(this.formValuePassenger){
      this.warningPassengerForButton = "";
    }*/
  }

 
  
}
  






