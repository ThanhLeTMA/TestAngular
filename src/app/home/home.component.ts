import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thanh';
  public age = 25;
  public traiCay = ['táo', 'nho', 'cam', 'quýt']
  constructor() { }
  ngOnInit(): void {
    console.log('trai cay = '+ this.traiCay)
  }

  

}
