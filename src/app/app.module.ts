import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { DatasService } from './services/datas.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MainPartComponent } from './components/main-part/main-part.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartForTimeCityWeatherComponent } from './components/part-for-time-city-weather/part-for-time-city-weather.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { ResultComponent } from './components/result/result.component';
import { CountriesComponent } from './components/countries/countries.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPartComponent,
    HeaderComponent,
    FooterComponent,
    PartForTimeCityWeatherComponent,
    LoginComponent,
    DetailsComponent,
    ResultComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [{provide: PathLocationStrategy, useClass: HashLocationStrategy},
    LocationService, DatasService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
