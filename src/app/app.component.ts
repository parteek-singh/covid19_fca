import { Component } from '@angular/core';
import { DatasetService } from './service/dataset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  loadingComplete: number = 0;
  constructor(private datasetService: DatasetService) {
    this.datasetService.loadingcomplete.subscribe(result => {
      if (result) {
        this.loadingComplete = this.loadingComplete + 1;
      }
    }, error => {

    });
  }

  ngOnInit(): void {
    this.datasetService.readCountryDataSet();
    this.datasetService.readEmotionDataSet();
    // this.datasetService.getDataSet();
  }
}
