import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };
  }
}
