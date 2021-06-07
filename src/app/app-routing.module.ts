import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MainComponent } from './components/main/main.component';
import { MainPartComponent } from './components/main-part/main-part.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { ResultComponent } from './components/result/result.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "mainPart", component: MainPartComponent },
  { path: "login", component: LoginComponent },
  { path: "details", component: DetailsComponent },
  { path: "result", component: ResultComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = []
