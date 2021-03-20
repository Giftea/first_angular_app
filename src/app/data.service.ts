import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  info1:string[]= ['John Doe', 'ES45', 'johnD@gmail.com']
  info2:string[]= ['Jane Doe', 'ES35', 'janeD@gmail.com']
  info3:string[]= ['Jill Doe', 'ES65', 'jillD@gmail.com']

  getInfo1():string[]{
    return this.info1

  }
  getInfo2():string[]{
    return this.info2

  }
  getInfo3():string[]{
    return this.info3

  }

  addInfo(info:any) {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
}
