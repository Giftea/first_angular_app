import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
  providers:[DataService],
})
export class EmployeeInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromService1() {
    this.infoReceived1 = this.dService.getInfo1()
  }
  getInfoFromService2() {
    this.infoReceived2 = this.dService.getInfo2()
  }
  getInfoFromService3() {
    this.infoReceived3 = this.dService.getInfo3()
  }

  updateInfo(frm:any){
    this.dService.addInfo(frm.value.location)

  }

  constructor(private dService:DataService) {}

  ngOnInit(): void {}
}
