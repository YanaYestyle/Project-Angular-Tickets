import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as data from '../../../assets/data/users.json';
import { DatasService } from '../../services/datas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  array = [{
    loginName: (<any>data)[0].loginName,
    password: (<any>data)[0].password,
    firstName: (<any>data)[0].firstName,
    lastName: (<any>data)[0].lastName,
    id: (<any>data)[0].id,
  },
 {
    loginName: (<any>data)[1].loginName,
    password: (<any>data)[1].password,
    firstName: (<any>data)[1].firstName,
    lastName: (<any>data)[1].lastName,
    id: (<any>data)[1].id,
  },
  {
    loginName: (<any>data)[2].loginName,
    password: (<any>data)[2].password,
    firstName: (<any>data)[2].firstName,
    lastName: (<any>data)[2].lastName,
    id: (<any>data)[2].id,
  },
  {
    loginName: (<any>data)[3].loginName,
    password: (<any>data)[3].password,
    firstName: (<any>data)[3].firstName,
    lastName: (<any>data)[3].lastName,
    id: (<any>data)[3].id,
  },
  {
    loginName: (<any>data)[4].loginName,
    password: (<any>data)[4].password,
    firstName: (<any>data)[4].firstName,
    lastName: (<any>data)[4].lastName,
    id: (<any>data)[4].id,
  }];
  formValueLogin: any;
  formValuePassword: any;
  public userFirstName: any;
  public userLastName: any;
  warningLogin: string



  constructor(private router:Router, private datasData:DatasService) { }

  
  

  loginForFor(form:NgForm){
    this.formValueLogin = form.value;
  };

  passwordForFor(form:NgForm){
    this.formValuePassword = form.value;
  }

  goToDetails(){
    for(let i=0; i<this.array.length; i++){
      if((this.array[i].loginName === this.formValueLogin['login']) && (this.array[i].password === this.formValuePassword['password'])){
        this.router.navigate(["/details"]);
        this.userFirstName = this.array[i].firstName;
        this.userLastName = this.array[i].lastName;
        this.datasData.sharedFirstName = this.userFirstName;
        this.datasData.sharedLastName = this.userLastName;
        break;
      }else{
        this.warningLogin = "Incorrect login name or password entered!"
      }
    }
  }

 

  ngOnInit(): void {
    
  } 

  

   
}
