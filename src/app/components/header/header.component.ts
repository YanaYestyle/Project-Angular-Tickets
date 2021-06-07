import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datasData:DatasService) { }

  ngOnInit(): void {
  }

  
}
