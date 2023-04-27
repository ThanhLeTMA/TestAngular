import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Thanh';
  public age = 25;
  public traiCay = ['táo', 'nho', 'cam', 'quýt', 'ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3, haGia: false },
    { ten: 'Cam', gia: 435, haGia: false },
    { ten: 'Quýt', gia: -69, haGia: true },
    { ten: 'Ôỉ', gia: -547, haGia: false },
  ];
  constructor() { }
  ngOnInit(): void {
    console.log('trai cay = ' + JSON.stringify(this.traiCay2));
  }
}
