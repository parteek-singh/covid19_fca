import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  title = 'Live Query Engine';
  searchText;
  constructor() { }

  ngOnInit(): void {
  }

}
