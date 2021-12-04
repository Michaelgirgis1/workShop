import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  isFormSubmit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    this.isFormSubmit= true;
  }


}
