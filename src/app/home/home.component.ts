import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thanh';
  public age = 25;
  public traiCay = []
  constructor() { }
  ngOnInit(): void {
    console.log('trai cay = '+ this.traiCay)
  }

  public resetName(): void {
    console.log('resetName');
    this.name = ' ';
  }

}
