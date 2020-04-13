import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/service/dataset.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  title = 'Browser market shares at a specific website, 2014';
  type = 'GeoChart';
  dynamicResize = true;
  data = [];
  // data = [
  //   ['City', 'Population'],
  //   ['Rome', 2761477],
  //   ['Milan', 1324110],
  //   ['Naples', 959574],
  //   ['Turin', 907563],
  //   ['Palermo', 655875],
  //   ['Genoa', 607906],
  //   ['Bologna', 380181],
  //   ['Florence', 371282],
  //   ['Fiumicino', 67370],
  //   ['Anzio', 52192],
  //   ['Ciampino', 38262]
  // ]
  constructor(private datasetService: DatasetService) { }

  ngOnInit(): void {
    let json = [];

    let countryData = this.datasetService.getCountryData();
    countryData.forEach(country => {
      let text = country.name + " - " + country.series[0].value + " " + country.series[0].name + "s";
      json.push([country.name, text])
    });

    this.data = json;
    console.log();
  }

}
