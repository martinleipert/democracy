import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card-argument';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss']
})
export class CardTextComponent implements OnInit {
  @Input() card: Card;


  constructor() { }

  ngOnInit(): void {
  }

}