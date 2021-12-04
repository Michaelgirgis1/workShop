import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isNewUpdateSend:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sendNewsEmail() {
    this.isNewUpdateSend = true;
  }

}
