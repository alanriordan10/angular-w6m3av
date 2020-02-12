import { Component, OnInit } from '@angular/core';
import { Listener } from '../model/listener';

@Component({
  selector: 'app-listeners',
  templateUrl: './listeners.component.html',
  styleUrls: ['./listeners.component.css']
})
export class ListenersComponent implements OnInit {

  listeners: Listener[];

  constructor() { }

  ngOnInit() {
  }

}