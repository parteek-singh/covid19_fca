import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatasetService } from 'src/app/service/dataset.service';
import { Country, TweetDetails } from 'src/app/models/country';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {


  selected: string = 'today';
  multi: any[];
  view: any[] = [1200, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Tweets';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#E44D25', '#C7B42C', '#5AA454', '#AAAAAA', '#7aa3e5']
  };


  private countriesData: Array<Country> = [];

  constructor(private datasetService: DatasetService) {

  }

  ngOnInit(): void {
    let consolidatedCountriesData = [];
    let countries = this.datasetService.getCountryData();
    countries = countries.sort((a, b) => +b.series[0].value - +a.series[0].value);

    let updatedcountries = [];

    countries.forEach(element => {
      let country = element;
      let series = [];
      for (let index = 1; index < element.series.length; index++) {
        series.push(element.series[index]);
      }
      country.series = series;
      updatedcountries.push(country);
    });

    //let topFive = countries.slice(0, 5);
    let topFive = updatedcountries.slice(0, 5);
    consolidatedCountriesData.push(...topFive);
    let bar1Value: number = 0;
    let bar2Value: number = 0;
    let bar3Value: number = 0;
    let bar4Value: number = 0;

    let bar1 = "";
    let bar2 = "";
    let bar3 = "";
    let bar4 = "";

    for (let index = 5; index < countries.length; index++) {
      const country = countries[index];
      bar1 = country.series[0].name;
      bar2 = country.series[1].name;
      bar3 = country.series[2].name;
      // bar4 = country.series[3].name;

      bar1Value = bar1Value + +country.series[0].value;
      bar2Value = bar2Value + +country.series[1].value;
      bar3Value = bar3Value + +country.series[2].value;
      //bar4Value = bar4Value + +country.series[3].value;

    }

    // let tweetDetails: TweetDetails = {
    //   name: bar1,
    //   value: bar1Value.toString()
    // }

    let botDetails: TweetDetails = {
      name: bar1,
      value: bar1Value.toString()
    }

    let falseDetails: TweetDetails = {
      name: bar2,
      value: bar2Value.toString()
    }

    let falseEventDetails: TweetDetails = {
      name: bar3,
      value: bar3Value.toString()
    }
    let others = {
      name: 'Rest of World',
      series: [
        //tweetDetails, 
        botDetails, falseDetails, falseEventDetails]
    }


    consolidatedCountriesData.push(others);
    this.multi = consolidatedCountriesData;
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
