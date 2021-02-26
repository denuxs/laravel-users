import { Component, OnInit } from '@angular/core';

import { USERS } from './data'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {

    // console.log(this.users)

    for (const key in this.users) {
      console.log(this.users[key])
    }
  }

}
