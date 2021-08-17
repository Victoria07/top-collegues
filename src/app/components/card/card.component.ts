import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  collegues: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}

