import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuShow: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  showMenu() {
    this.isMenuShow = !this.isMenuShow;

  }

}
