import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  template: `<app-servers></app-servers>
  sss
  <app-servers></app-servers>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
