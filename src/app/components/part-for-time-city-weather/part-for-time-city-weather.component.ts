import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-part-for-time-city-weather',
  templateUrl: './part-for-time-city-weather.component.html',
  styleUrls: ['./part-for-time-city-weather.component.css']
})
export class PartForTimeCityWeatherComponent implements OnInit {
  city: any;
  country: any;
  date1: any;
  time: any;
  data: any;
  interval: any;
  url1 = "http://api.weatherapi.com/v1/current.json?key=27961d4a780e44bcae7173229213004&q=";
  url2 = "&aqi=no";
  urlWeather = "";
  temperature: any;
  icon: any;
  someDate = (new Date()).toISOString().substring(0,10).split('-').reverse().join('.');

  constructor(private route:ActivatedRoute, private locationData:LocationService, private http:HttpClient) { }

  ngOnInit(): void {
    this.locationData.getConnectionDetails().subscribe( (result:any[]) => {
      this.city = result['city'];
      this.urlWeather = this.url1 + this.city + this.url2;
      this.getConnectionDetails().subscribe( (resultWeather:any[]) => {
        var t1 = resultWeather['current'];
        this.temperature = t1['temp_c'];
        var t2 = t1['condition'];
        this.icon = t2['icon'];
      this.country = result['country'];
      this.interval = setInterval(() => { 
        this.data = new Date();
        
        this.date1 = this.data.getDate() + '.' + (this.data.getMonth() + 1) + '.' + this.data.getFullYear();
        this.time = this.data.getHours() + ':' + (this.data.getMinutes()<10?('0'+this.data.getMinutes()):this.data.getMinutes());
    }, 1000);
    })
    
    })
    console.log(this.someDate);
    consoleText(['New impressions', 'New discoveries', "Let's start..."], 'text',['#EB8A44','#919636','#F9DC24']);

    function consoleText(words: any[], id: string, colors: any[]) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
    }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
    }, 400)
  }

  }
  getConnectionDetails(){
    return this.http.get(this.urlWeather);
  
  }

}
