import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: any;

  avatar: string;
  value: string;
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.avatar = this.data.avatar;
    this.value = this.data.value;
    this.title = this.data.title;
  }

}
