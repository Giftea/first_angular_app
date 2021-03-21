import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit (login:any) {
    console.log("submitted", login);
    
  }

}
