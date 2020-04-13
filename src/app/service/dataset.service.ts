import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Country, TweetDetails } from '../models/country'
import { Emotion, ConsolidatedEmotion } from '../models/emotion';
import { Header } from '../models/header';


@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  loadingcomplete = new Subject<boolean>();

  private headerData: Array<Header> = [];
  private countriesData: Array<Country> = [];
  private emotionsData: Array<Emotion> = [];
  private consolidatedEmotionsData: Array<ConsolidatedEmotion> = [];

  private _countryJsonURL = 'assets/countryData.json';
  private _emotionTrendJsonURL = 'assets/emotionTrend.json';
  private _emotionjsonURL = 'assets/emotion.json';
  private _headerJsonURL = 'assets/headerData.json';

  constructor(private http: HttpClient) { }

  getHeaderData() {
    return this.headerData;
  }

  getCountryData() {
    return this.countriesData;
  }

  getEmotionData() {
    return this.emotionsData;
  }

  getConsolidatedEmotionsData() {
    return this.consolidatedEmotionsData;
  }

  readCountryDataSet() {
    this.http.get('assets/country.csv', { responseType: 'text' })
      .subscribe(
        data => {
          if (data != undefined) {
            let lines = data.split("\n");
            for (let index = 1; index < lines.length; index++) {
              const headers = lines[0].split(",");
              const cols = lines[index].split(",");
              let seriesArray: Array<TweetDetails> = [];
              for (let i = 1; i < cols.length; i++) {
                const series = cols[i];
                seriesArray.push({
                  name: headers[i],
                  value: series,
                });
              }

              let country: Country = {
                name: cols[0],
                series: seriesArray
              }
              if (country.name !== "")
                this.countriesData.push(country);

            }
          }

          this.loadHeaders();
          this.loadingcomplete.next(true);

        },
        error => {
          this.loadingcomplete.next(false);
          console.log(error);
        }
      );
  }

  loadHeaders() {
    let tweetsCount = 0;
    let botGenratedCount = 0;
    let falseClaimCount = 0;
    let falseEventCount = 0;
    this.countriesData.forEach(country => {
      tweetsCount = tweetsCount + +country.series[0].value;
      botGenratedCount = botGenratedCount + +country.series[1].value;
      falseClaimCount = falseClaimCount + +country.series[2].value;
      falseEventCount = falseEventCount + +country.series[3].value;
    });

    this.headerData.push({ value: tweetsCount });
    this.headerData.push({ value: botGenratedCount });
    this.headerData.push({ value: falseClaimCount });
    this.headerData.push({ value: falseEventCount });
  }

  readEmotionDataSet() {
    this.http.get('assets/emotions.csv', { responseType: 'text' })
      .subscribe(
        data => {
          if (data != undefined) {
            let lines = data.split("\n");
            for (let index = 1; index < lines.length; index++) {
              const dates = lines[0].split(",");
              const cols = lines[index].split(",");
              let emotion: Emotion = {
                name: cols[0],
                series: [{
                  name: dates[1],
                  value: +cols[1]
                },
                {
                  name: dates[2],
                  value: +cols[2]
                }, {
                  name: dates[3],
                  value: +cols[3]
                }, {
                  name: dates[4],
                  value: +cols[4]
                }, {
                  name: dates[5],
                  value: +cols[5]
                }, {
                  name: dates[6],
                  value: +cols[6]
                }, {
                  name: dates[7],
                  value: +cols[7]
                }, {
                  name: dates[8],
                  value: +cols[8]
                },
                ],
              }
              this.emotionsData.push(emotion);

            }

            if (this.emotionsData.length > 0) {
              this.emotionsData.forEach(emotions => {
                let totalNumber = 0;
                emotions.series.forEach(series => {
                  totalNumber = totalNumber + series.value;
                });
                let consolidatedEmotion: ConsolidatedEmotion = {
                  name: emotions.name,
                  value: totalNumber
                }
                this.consolidatedEmotionsData.push(consolidatedEmotion);
              });
            }
          }
          this.loadingcomplete.next(true);
          // console.log(this.emotionsData);
        },
        error => {
          this.loadingcomplete.next(false);
          console.log(error);
        }
      );
  }

  getDataSet() {
    this.http.get('assets/dataset.csv', { responseType: 'text' })
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }



  getHeaders(): Observable<any> {
    return this.http.get(this._headerJsonURL);
  }

  getCountryDetails(): Observable<any> {
    return this.http.get(this._countryJsonURL);
  }

  getEmotionTrendDetails(): Observable<any> {
    return this.http.get(this._emotionTrendJsonURL);
  }

  getEmotionDetails(): Observable<any> {
    return this.http.get(this._emotionjsonURL);
  }
}
