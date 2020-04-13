import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatasetService } from 'src/app/service/dataset.service';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  single: any[];
  view: any[] = [900, 500];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private datesetService: DatasetService) {
  }
  dummy;
  ngOnInit(): void {
    this.single = this.datesetService.getConsolidatedEmotionsData();
    // this.datesetService.getEmotionDetails().subscribe(result => {
    //   this.single = result;
    // }, error => {
    //   console.log(error);
    // });

  }

  onSelect(event) {
    console.log(event);
  }
}
